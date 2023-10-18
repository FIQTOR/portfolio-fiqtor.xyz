import { TbBrandGithub, TbEye } from "react-icons/tb";
import { METADATA } from "../../constant/metadata";
import Square from "./square";


export async function Contributions() {
    const { data } = await getContributions();
    const contributionsData = getContributionsCount(data);

    return (
        <>
            <div className='mt-[50px] px-0 md:px-[5%]'>
                <div className='flex items-center gap-[10px]'>
                    <TbBrandGithub className='w-7 h-7' />
                    <h2 className='text-2xl font-semibold'>Contributions</h2>
                </div>
                <p>My contributions from last year on github.</p>
                <a href={`https://github.com/${METADATA.githubUsername}`} target='_blank' aria-label='View On Github'
                    className='text-blue-600 flex gap-[5px] items-center hover:opacity-70 duration-100'>View On Github
                    <TbEye className='h-full w-6' />
                </a>
                <div className='my-[10px] grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 justify-around gap-[10px]'>
                    <div className='w-full p-[10px] rounded-md border-[1px] border-stone-300 dark:border-neutral-800 dark:bg-neutral-800'>
                        <h3>Total</h3>
                        <p className='text-green-600 text-2xl font-semibold'>
                            {contributionsData.total}
                        </p>
                    </div>
                    <div className='w-full p-[10px] rounded-md border-[1px] border-stone-300 dark:border-neutral-800 dark:bg-neutral-800'>
                        <h3>This Month</h3>
                        <p className='text-green-600 text-2xl font-semibold'>
                            {contributionsData.thisMonth}
                        </p>
                    </div>
                    <div className='w-full p-[10px] rounded-md border-[1px] border-stone-300 dark:border-neutral-800 dark:bg-neutral-800'>
                        <h3>This week</h3>
                        <p className='text-green-600 text-2xl font-semibold'>
                            {contributionsData.thisWeek}
                        </p>
                    </div>
                </div>
                <div className='w-full h-full pb-[20px] overflow-x-auto'>
                    <div className='p-[20px] min-w-[640px] rounded-md border-[1px] border-stone-300 dark:border-neutral-800'>
                        {!data && <p>Invalid Gthub Token!</p>}
                        <div className='w-full flex justify-start'>
                            {data && data.user.contributionsCollection.contributionCalendar.months.map((month: any, index: number) => {
                                month.totalWeeks > 2 && 
                                <div key={index} style={{ minWidth: `${(month.totalWeeks * 1.9)}%` }}>
                                    <p className='text-[12px] md:text-base'>{month.name}</p>
                                </div>
                            }
                            )}
                        </div>
                        <Square data={data} />
                    </div>
                </div>
                {/* <img src="https://ghchart.rshah.org/000000/fiqtor" alt="Github Contributions" className='w-full' /> */}
            </div >
        </>
    )
}

// async function getUserGithub() {
//   const res = await fetch(`https://api.github.com/users/${METADATA.githubUsername}`);
//   return res.json();
// }

async function getContributions() {
    const token = process.env.GITHUB_TOKEN;
    const username = METADATA.githubUsername;
    const headers = {
        'Authorization': `bearer ${token}`,
    }
    const body = {
        "query": `query {
        user(login: "${username}") {
          contributionsCollection {
            contributionCalendar {
              colors
              totalContributions
              months {
                firstDay
                name
                totalWeeks
              }
              weeks {
                contributionDays {
                  color
                  contributionCount
                  date
                }
                firstDay
              }
            }
          }
        }
      }`
    }
    let response = await fetch(
        'https://api.github.com/graphql',
        { method: 'POST', body: JSON.stringify(body), headers: headers });
    await new Promise(r => setTimeout(r, 2000))
    const data = await response.json();
    return data;
}

function getContributionsCount(data: any) {
    let total = "";
    let thisWeek = "";
    let thisMonth = "";
    if (data != null && data != '') {
        total = JSON.stringify(data.user.contributionsCollection.contributionCalendar.totalContributions);
        var indexWeek = data.user.contributionsCollection.contributionCalendar.weeks.length - 1;
        var ccount = 0;
        for (var i = 0; i < data.user.contributionsCollection.contributionCalendar.weeks[indexWeek].contributionDays.length; i++) {
            ccount += data.user.contributionsCollection.contributionCalendar.weeks[indexWeek].contributionDays[i].contributionCount;
        }
        thisWeek = JSON.stringify(ccount);

        var indexMonth = data.user.contributionsCollection.contributionCalendar.months.length - 1;
        let totalWeeks = data.user.contributionsCollection.contributionCalendar.months[indexMonth].totalWeeks;
        indexWeek = data.user.contributionsCollection.contributionCalendar.weeks.length - totalWeeks;
        ccount = 0;
        for (var a = indexWeek; a <= (data.user.contributionsCollection.contributionCalendar.weeks.length - 1); a++) {
            for (var i = 0; i < data.user.contributionsCollection.contributionCalendar.weeks[indexWeek].contributionDays.length; i++) {
                if (data.user.contributionsCollection.contributionCalendar.weeks[a].contributionDays[i]) {
                    ccount += data.user.contributionsCollection.contributionCalendar.weeks[a].contributionDays[i].contributionCount;
                }
            }
        }
        thisMonth = JSON.stringify(ccount);

    }
    let contributionsData = { total, thisMonth, thisWeek };

    return contributionsData;
}
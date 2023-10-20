import { TbBrandGithub, TbEye } from "react-icons/tb";
import { METADATA } from "../../constant/metadata";
import Square from "./square";


export async function Contributions() {
  const { data } = await getContributions();
  const contributionsData = getContributionsCount(data);

  return (
    <div className='mt-12 md:px-[5%]'>
      <div className='flex items-center gap-3'>
        <TbBrandGithub className='w-7 h-7' />
        <h2 className='text-2xl font-semibold'>Contributions</h2>
      </div>
      <p>My contributions from last year on github.</p>
      <a href={`https://github.com/${METADATA.githubUsername}`} target='_blank' aria-label='View On Github'
        className='text-blue-600 dark:text-blue-300 flex gap-1 items-center hover:opacity-70 duration-100'>View On Github
        <TbEye className='h-full w-6 animate-pulse' />
      </a>
      <div className='my-3 grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 justify-around gap-3'>
        <div className='w-full p-3 rounded-md border border-stone-300 dark:border-neutral-800'>
          <span>Total</span>
          <p className='text-green-600 text-2xl font-semibold'>
            {contributionsData.total}
          </p>
        </div>
        <div className='w-full p-3 rounded-md border border-stone-300 dark:border-neutral-800'>
          <span>This Month</span>
          <p className='text-green-600 text-2xl font-semibold'>
            {contributionsData.thisMonth}
          </p>
        </div>
        <div className='w-full p-3 rounded-md border border-stone-300 dark:border-neutral-800'>
          <span>This week</span>
          <p className='text-green-600 text-2xl font-semibold'>
            {contributionsData.thisWeek}
          </p>
        </div>
      </div>
      <div className='w-full h-full pb-5 overflow-x-auto'>
        <div className='p-5 min-w-[640px] rounded-md border border-stone-300 dark:border-neutral-800'>
          {!data && <p>Invalid Gthub Token!</p>}
          <div className='flex text-xs md:text-base'>
            {data && data.user.contributionsCollection.contributionCalendar.months.map((month: any, index: number) => {
              return (
                <span key={index} style={{ minWidth: `${(month.totalWeeks * 1.9)}%` }}>
                  {month.totalWeeks > 2 &&
                    month.name
                  }
                </span>
              )
            }
            )}
          </div>
          <div className='flex gap-px md:gap-[3px]'>
            {data && data.user.contributionsCollection.contributionCalendar.weeks.slice(1).map((week: any, index: number) =>
              <ul key={index} className='w-full flex flex-col gap-px md:gap-1'>
                {week.contributionDays.map((contributionDay: any, index_: number) => {
                  const color = ((contributionDay.contributionCount == 0) ? '' : contributionDay.color)
                  return (
                    <Square color={color} key={index_} />
                  )
                }
                )}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

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
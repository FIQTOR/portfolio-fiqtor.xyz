import Loading from '@/common/components/layouts/loading';
import { METADATA } from '@/common/constant/metadata'
import React, { Suspense } from 'react'
import { TbBrandGithub, TbCloudComputing, TbEye } from 'react-icons/tb';

export default async function About() {
  // const data = await getUserGithub();
  return (
    <section id='about' className='w-full pt-[50px] px-[5%]'>
      <div className='flex flex-col-reverse gap-[20px] md:gap-0 md:flex-row items-center'>
        <div className='w-full md:w-1/2 flex justify-center items-center h-[500px]'>
          <img src="/img/src/mobile2.webp" alt="mobile" height='100%' className='h-full bg-cover' />
        </div>
        <div className='w-full md:w-1/2 flex flex-col gap-[30px]'>
          <div className='flex gap-[10px]'>
            <TbCloudComputing className='w-[40px] h-[40px] md:w-[50px] md:h-[50px]' />
            <div>
              <h2 className='text-2xl font-semibold md:text-4xl'>About Me</h2>
              <p className='md:text-xl'>My description in website development.</p>
            </div>
          </div>
          <div>
            <p className='w-full'><span className='text-2xl font-semibold'>Hello,</span> <br />
              My name is {METADATA.authors.name}. I am a web developer specializing in React and Laravel frameworks, along with MySQL and PostgreSQL databases. My primary focus is on delivering high-performance websites that are interactive and responsive. With my experience in web application development, I strive to provide users with an optimal experience through attractive designs and exceptional functionality. I enjoy exploring new technologies and continuously learning the best practices to enhance website performance and responsiveness.</p>
          </div>
          <div className='flex flex-col gap-[10px]'>
            <div>
              <h3 className='text-2xl font-semibold'>Education</h3>
              <p className='flex gap-[10px]'>SMK Telekomunikasi Darul Ulum <a target='_blank'
                href="https://www.google.co.id/maps/place/SMK+Telekomunikasi+Darul+Ulum+Jombang/@-7.5432097,112.2804037,20.08z/data=!4m6!3m5!1s0x2e78155242695597:0xa470b7d93a5e14f6!8m2!3d-7.5432031!4d112.280603!16s%2Fg%2F11gzytsc5?hl=id&entry=ttu">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                  className='w-[20px] h-[20px] fill-stone-950 dark:fill-white'>
                  <path d="M19.527 4.799c1.212 2.608.937 5.678-.405 8.173-1.101 2.047-2.744 3.74-4.098 5.614-.619.858-1.244 1.75-1.669 2.727-.141.325-.263.658-.383.992-.121.333-.224.673-.34 1.008-.109.314-.236.684-.627.687h-.007c-.466-.001-.579-.53-.695-.887-.284-.874-.581-1.713-1.019-2.525-.51-.944-1.145-1.817-1.79-2.671L19.527 4.799zM8.545 7.705l-3.959 4.707c.724 1.54 1.821 2.863 2.871 4.18.247.31.494.622.737.936l4.984-5.925-.029.01c-1.741.601-3.691-.291-4.392-1.987a3.377 3.377 0 0 1-.209-.716c-.063-.437-.077-.761-.004-1.198l.001-.007zM5.492 3.149l-.003.004c-1.947 2.466-2.281 5.88-1.117 8.77l4.785-5.689-.058-.05-3.607-3.035zM14.661.436l-3.838 4.563a.295.295 0 0 1 .027-.01c1.6-.551 3.403.15 4.22 1.626.176.319.323.683.377 1.045.068.446.085.773.012 1.22l-.003.016 3.836-4.561A8.382 8.382 0 0 0 14.67.439l-.009-.003zM9.466 5.868L14.162.285l-.047-.012A8.31 8.31 0 0 0 11.986 0a8.439 8.439 0 0 0-6.169 2.766l-.016.018 3.665 3.084z" /></svg>
              </a></p>
              <p>July 2022</p>
            </div>
            <div>
              <h3 className='font-semibold'>Expected year of Graduation</h3>
              <p>2025 June</p>
            </div>
          </div>
        </div>
      </div>
      <Suspense fallback={Loading()}>
        <Contributions />
      </Suspense>

    </section>
  )
}

async function Contributions() {
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
        <a href={`https://github.com/${METADATA.githubUsername}`} target='_blank'
          className='text-blue-400 flex gap-[5px] items-center hover:opacity-70 duration-100'>View On Github
          <TbEye className='h-full w-6' />
        </a>
        <div className='my-[10px] grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 justify-around gap-[10px]'>
          <div className='w-full p-[10px] rounded-md border-[1px] border-stone-300 dark:border-neutral-800 dark:bg-neutral-800'>
            <h3>Total</h3>
            <p className='text-green-400 text-2xl font-semibold'>
              {contributionsData.total}
            </p>
          </div>
          <div className='w-full p-[10px] rounded-md border-[1px] border-stone-300 dark:border-neutral-800 dark:bg-neutral-800'>
            <h3>This Month</h3>
            <p className='text-green-400 text-2xl font-semibold'>
              {contributionsData.thisMonth}
            </p>
          </div>
          <div className='w-full p-[10px] rounded-md border-[1px] border-stone-300 dark:border-neutral-800 dark:bg-neutral-800'>
            <h3>This week</h3>
            <p className='text-green-400 text-2xl font-semibold'>
              {contributionsData.thisWeek}
            </p>
          </div>
          {/* <div className='m-[10px] p-[10px] rounded-md border-[1px] border-stone-300'>
          <h3 className='text-xl'>Join</h3>
          <p className='text-stone-800 text-2xl font-bold'>
            {JSON.stringify(data.user.contributionsCollection.contributionCalendar.weeks[0])}
          </p>
        </div> */}
        </div>
        <div className='w-full h-full pb-[20px] overflow-x-auto'>
          <div className='p-[20px] min-w-[640px] rounded-md border-[1px] border-stone-300 dark:border-neutral-800'>
            {!data && <p>Invalid Gthub Token!</p>}
            <div className='w-full flex justify-start'>
              {data && data.user.contributionsCollection.contributionCalendar.months.slice(1).map((month: any, index: number) =>
                <div key={index} style={{ minWidth: `${(month.totalWeeks * 1.9)}%` }}>
                  <p className='text-[12px] md:text-base'>{month.name}</p>
                </div>
              )}
            </div>
            <div className='w-full h-fit flex flex-row justify-between gap-[1px] md:gap-[3px]'>
              {data && data.user.contributionsCollection.contributionCalendar.weeks.slice(1).map((week: any, index: number) =>
                <div key={index} className='w-full flex flex-col gap-[1px] md:gap-[3px]'>
                  {week.contributionDays.map((contributionDay: any, index_: number) =>
                    <div key={index_} className={`w-full aspect-square bg-neutral-300 dark:bg-neutral-800`} style={{
                      backgroundColor: `${((contributionDay.contributionCount == 0) ? '' : contributionDay.color)}`
                    }} />
                  )}
                </div>
              )}
            </div>
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
        name
        createdAt
        contributionsCollection {
          contributionCalendar {
            colors 
            totalContributions
            weeks {
              contributionDays {
                weekday
                date 
                contributionCount 
                color
              }
            }
            months  {
              name
              year
              firstDay 
              totalWeeks
            }
          }
        }
      }
    }`
  }
  const response = await fetch(
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
        if(data.user.contributionsCollection.contributionCalendar.weeks[a].contributionDays[i]) {
          ccount += data.user.contributionsCollection.contributionCalendar.weeks[a].contributionDays[i].contributionCount;
        }
      }
    }
    thisMonth = JSON.stringify(ccount);

  }
  let contributionsData = { total, thisMonth, thisWeek };

  return contributionsData;
}
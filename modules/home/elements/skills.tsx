import React from 'react'
import {
  TbLanguage, TbLayoutDashboard, TbDatabase,
  TbGitFork,
  TbBrandVscode,
  TbArrowsSort
} from 'react-icons/tb';
import { Processor } from '@/common/components/lottie';
import { Skills } from '@/common/constant/skills';
import { BackendSkills, DevopsSkills, FrontendSkills, LanguageSkills } from './skill_icon';

export default function SkillsSection() {
  return (
    <section id='skills' className='w-full px-[5%] flex flex-col gap-5'>

      <div className='w-full flex items-center'>
        <div className='w-full md:w-1/2 flex flex-col gap-7'>
          <div className='flex gap-3 items-center'>
            <TbBrandVscode strokeWidth='1' className='w-14 md:w-20 h-full text-red-600' />
            <div className='h-fit'>
              <h2 className='text-2xl font-semibold md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-indigo-600'>Skills</h2>
              <p className='md:text-xl'>My coding skills.</p>
            </div>
          </div>

          <div className='flex flex-col md:flex-row gap-5 md:gap-7'>
            <h3 className='w-fit min-w-[180px] h-fit px-7 py-3 border border-stone-300 rounded-full
                md:text-xl flex justify-center items-center gap-2 dark:border-neutral-800 dark:bg-neutral-800'>
              <TbLanguage strokeWidth='1' className='w-7 h-7' />
              Language
            </h3>
            <ul className='flex flex-wrap gap-3 md:gap-5'>
              <LanguageSkills />
            </ul>
          </div>

          <div className='flex flex-col md:flex-row gap-5 md:gap-7'>
            <h3 className='w-fit min-w-[180px] h-fit px-7 py-3 border border-stone-300 rounded-full
                md:text-xl flex justify-center items-center gap-2 dark:border-neutral-800 dark:bg-neutral-800'>
              <TbLayoutDashboard strokeWidth='1' className='w-7 h-7' />
              Frontend
            </h3>
            <ul className='flex flex-wrap gap-3 md:gap-5'>
              <FrontendSkills />
            </ul>
          </div>

          <div className='flex flex-col md:flex-row gap-5 md:gap-7'>
            <h3 className='min-w-[180px] px-7 py-3 border border-stone-300 rounded-full
                md:text-xl flex justify-center items-center gap-2 dark:border-neutral-800 dark:bg-neutral-800'>
              <TbDatabase strokeWidth='1' className='w-7 h-7' />
              Backend
            </h3>
            <ul className='flex flex-wrap gap-3 md:gap-5'>
              <BackendSkills />
            </ul>
          </div>

          <div className='flex flex-col md:flex-row gap-5 md:gap-7'>
            <h3 className='w-fit min-w-[180px] h-fit px-7 py-3 border border-stone-300 rounded-full
              md:text-xl flex justify-center items-center gap-2 dark:border-neutral-800 dark:bg-neutral-800'>
              <TbGitFork strokeWidth='1' className='w-7 h-7' />
              DevOps
            </h3>
            <ul className='flex flex-wrap gap-3 md:gap-5'>
              <DevopsSkills />
            </ul>
          </div>
        </div>


        <div className='absolute left-0 w-full md:relative md:w-1/2 z-[-1]'>
          <Processor />
        </div>
      </div>

      <div className='flex flex-col gap-7'>
        <h1 className='text-2xl font-semibold flex gap-3'>
          <TbArrowsSort className='w-7 h-7 animate-bounce' />
          API mastery</h1>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>

          {Skills.API?.map((item: any, index: number) => (
            <div key={index} className='w-full border 
              border-stone-300 p-5 rounded-xl flex flex-col gap-5
              md:hover:scale-105 md:duration-300 dark:border-neutral-800 dark:bg-neutral-800'>
              <h2 className='flex items-center gap-3 text-lg font-semibold'>
                <item.SvgIcon className={`w-5 h-5 md:w-10 md:h-10 ${item.class}`} />
                {item.title}
              </h2>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

    </section >
  )
}

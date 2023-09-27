import React, { Suspense } from 'react'
import {
  SiFacebook,
  SiGithub
} from "react-icons/si";
import {
  TbArrowsLeftRight, TbLanguage, TbLayoutDashboard, TbDatabase,
  TbGitFork,
  TbBrandVscode
} from 'react-icons/tb';
import { FcGoogle } from "react-icons/fc";
import { Processor } from '@/common/components/elements/lottie';
import { Skills } from '@/common/constant/skills';

export default function SkillsSection() {
  let classIcon: string = 'w-[40px] h-[40px]';
  return (
    <section id='skills' className='w-full px-[5%] flex flex-col gap-[30px]'>

      <div className='w-full flex items-center'>
        <div className='w-full md:w-1/2 flex flex-col gap-[30px]'>
          <div className='flex gap-[10px]'>
            <TbBrandVscode strokeWidth='1' className='w-[40px] h-[40px] md:w-[50px] md:h-[50px]' />
            <div>
              <h2 className='text-2xl font-semibold md:text-4xl'>Skills</h2>
              <p className='md:text-xl'>My coding skills.</p>
            </div>
          </div>

          <div className='flex flex-col md:flex-row gap-[20px] md:gap-[30px]'>
            <h3 className='w-fit min-w-[180px] h-fit px-[30px] py-[10px] border-[1px] border-stone-300 rounded-full
                md:text-xl flex justify-center items-center gap-[5px] dark:border-neutral-800 dark:bg-neutral-800'>
              <TbLanguage strokeWidth='1' className='w-7 h-7' />
              Language
            </h3>
            <div className='flex flex-wrap gap-[10px] md:gap-[20px]'>
              {Skills.language?.map((item: any, index: number) => (
                <div key={index} className='tooltip' data-tooltip={item.tooltip}>
                  <item.SvgIcon className={`${classIcon} ${item.class}`} />
                </div>
              ))}
            </div>
          </div>

          <div className='flex flex-col md:flex-row gap-[20px] md:gap-[30px]'>
            <h3 className='w-fit min-w-[180px] h-fit px-[30px] py-[10px] border-[1px] border-stone-300 rounded-full
                md:text-xl flex justify-center items-center gap-[5px] dark:border-neutral-800 dark:bg-neutral-800'>
              <TbLayoutDashboard strokeWidth='1' className='w-7 h-7' />
              Frontend
            </h3>
            <div className='flex flex-wrap gap-[10px] md:gap-[20px]'>
              {Skills.frontend?.map((item: any, index: number) => (
                <div key={index} className='tooltip' data-tooltip={item.tooltip}>
                  <item.SvgIcon className={`${classIcon} ${item.class}`} />
                </div>
              ))}
            </div>
          </div>

          <div className='flex flex-col md:flex-row gap-[20px] md:gap-[30px]'>
            <h3 className='w-fit min-w-[180px] h-fit px-[30px] py-[10px] border-[1px] border-stone-300 rounded-full
                md:text-xl flex justify-center items-center gap-[5px] dark:border-neutral-800 dark:bg-neutral-800'>
              <TbDatabase strokeWidth='1' className='w-7 h-7' />
              Backend
            </h3>
            <div className='flex flex-wrap gap-[10px] md:gap-[20px]'>
              {Skills.backend?.map((item: any, index: number) => (
                <div key={index} className='tooltip' data-tooltip={item.tooltip}>
                  <item.SvgIcon className={`${classIcon} ${item.class}`} />
                </div>
              ))}
            </div>
          </div>

          <div className='flex flex-col md:flex-row gap-[20px] md:gap-[30px]'>
            <h3 className='w-fit min-w-[180px] h-fit px-[30px] py-[10px] border-[1px] border-stone-300 rounded-full
              md:text-xl flex justify-center items-center gap-[5px] dark:border-neutral-800 dark:bg-neutral-800'>
              <TbGitFork strokeWidth='1' className='w-7 h-7' />
              DevOps
            </h3>
            <div className='flex flex-wrap gap-[10px] md:gap-[20px]'>
              {Skills.devops?.map((item: any, index: number) => (
                <div key={index} className='tooltip' data-tooltip={item.tooltip}>
                  <item.SvgIcon className={`${classIcon} ${item.class}`} />
                </div>
              ))}
            </div>
          </div>
        </div>


        <div className='absolute left-0 w-full md:relative md:w-1/2 z-[-1] md:z-[1]'>
          <Processor />
        </div>
      </div>

      <div className='flex flex-col gap-[30px]'>
        <h1 className='text-2xl font-semibold flex gap-[10px]'>
          <TbArrowsLeftRight className='w-7 h-7' />
          API mastery</h1>

        <div className='flex flex-col md:flex-row flex-wrap gap-[20px]'>

          {Skills.API?.map((item: any, index: number) => (
            <div key={index} className='w-full md:max-w-[300px] border-[1px] 
              border-stone-300 p-[20px] rounded-xl flex flex-col gap-[20px]
              md:hover:scale-105 md:duration-300 dark:border-neutral-800 dark:bg-neutral-800'>
              <h2 className='flex items-center gap-[10px] text-lg font-semibold'>
                <item.SvgIcon className={`w-5 h-5 md:w-[40px] md:h-[40px] ${item.class}`} />
                {item.title}
              </h2>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

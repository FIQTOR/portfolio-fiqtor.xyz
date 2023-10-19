'use client'
import React, { Suspense } from 'react'
import {
  TbArrowsLeftRight, TbLanguage, TbLayoutDashboard, TbDatabase,
  TbGitFork,
  TbBrandVscode
} from 'react-icons/tb';
import { Processor } from '@/common/components/lottie';
import { Skills } from '@/common/constant/skills';
import { motion } from 'framer-motion';

export default function SkillsSection() {
  let classIcon: string = 'w-10 h-10';
  return (
    <section id='skills' className='w-full px-[5%] flex flex-col gap-5'>

      <div className='w-full flex items-center'>
        <div className='w-full md:w-1/2 flex flex-col gap-7'>
          <div className='flex gap-3 items-center'>
            <TbBrandVscode strokeWidth='1' className='w-14 md:w-20 h-full' />
            <div className='h-fit'>
              <h2 className='text-2xl font-semibold md:text-4xl'>Skills</h2>
              <p className='md:text-xl'>My coding skills.</p>
            </div>
          </div>

          <div className='flex flex-col md:flex-row gap-5 md:gap-7'>
            <h3 className='w-fit min-w-[180px] h-fit px-7 py-3 border border-stone-300 rounded-full
                md:text-xl flex justify-center items-center gap-2 dark:border-neutral-800 dark:bg-neutral-800'>
              <TbLanguage strokeWidth='1' className='w-7 h-7' />
              Language
            </h3>
            <div className='flex flex-wrap gap-3 md:gap-5'>
              {Skills.language?.map((item: any, index: number) => (
                <div key={index} className='tooltip before:text-neutral-700 dark:text-white before:bg-neutral-200 
                before:dark:bg-white before:content-[attr(data-tooltip)]'
                  data-tooltip={item.tooltip}>
                  <motion.div
                    initial={{ opacity: 0, filter: 'blur(15px)', y: 50 }}
                    whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    transition={{ delay: (0.5 * index) }}
                  >
                    <item.SvgIcon className={`${classIcon} ${item.class}`} />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <div className='flex flex-col md:flex-row gap-5 md:gap-7'>
            <h3 className='w-fit min-w-[180px] h-fit px-7 py-3 border border-stone-300 rounded-full
                md:text-xl flex justify-center items-center gap-2 dark:border-neutral-800 dark:bg-neutral-800'>
              <TbLayoutDashboard strokeWidth='1' className='w-7 h-7' />
              Frontend
            </h3>
            <div className='flex flex-wrap gap-3 md:gap-5'>
              {Skills.frontend?.map((item: any, index: number) => (
                <div key={index} className='tooltip before:text-neutral-700 dark:text-white before:bg-neutral-200 
                before:dark:bg-white before:content-[attr(data-tooltip)]'
                  data-tooltip={item.tooltip}>
                  <motion.div
                    initial={{ opacity: 0, filter: 'blur(15px)', y: 50 }}
                    whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    transition={{ delay: (0.5 * index) }}
                  >
                    <item.SvgIcon className={`${classIcon} ${item.class}`} />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <div className='flex flex-col md:flex-row gap-5 md:gap-7'>
            <h3 className='min-w-[180px] px-7 py-3 border border-stone-300 rounded-full
                md:text-xl flex justify-center items-center gap-2 dark:border-neutral-800 dark:bg-neutral-800'>
              <TbDatabase strokeWidth='1' className='w-7 h-7' />
              Backend
            </h3>
            <div className='flex flex-wrap gap-3 md:gap-5'>
              {Skills.backend?.map((item: any, index: number) => (
                <div key={index} className='tooltip before:text-neutral-700 dark:text-white before:bg-neutral-200 
                before:dark:bg-white before:content-[attr(data-tooltip)]'
                  data-tooltip={item.tooltip}>
                  <motion.div
                    initial={{ opacity: 0, filter: 'blur(15px)', y: 50 }}
                    whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    transition={{ delay: (0.5 * index) }}
                  >
                    <item.SvgIcon className={`${classIcon} ${item.class}`} />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <div className='flex flex-col md:flex-row gap-5 md:gap-7'>
            <h3 className='w-fit min-w-[180px] h-fit px-7 py-3 border border-stone-300 rounded-full
              md:text-xl flex justify-center items-center gap-2 dark:border-neutral-800 dark:bg-neutral-800'>
              <TbGitFork strokeWidth='1' className='w-7 h-7' />
              DevOps
            </h3>
            <div className='flex flex-wrap gap-3 md:gap-5'>
              {Skills.devops?.map((item: any, index: number) => (
                <div key={index} className='tooltip before:text-neutral-700 dark:text-white before:bg-neutral-200 
                before:dark:bg-white before:content-[attr(data-tooltip)]'
                  data-tooltip={item.tooltip}>
                  <motion.div
                    initial={{ opacity: 0, filter: 'blur(15px)', y: 50 }}
                    whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    transition={{ delay: (0.5 * index) }}
                  >
                    <item.SvgIcon className={`${classIcon} ${item.class}`} />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>


        <div className='absolute left-0 w-full md:relative md:w-1/2 z-[-1]'>
          {/* <Processor /> */}
        </div>
      </div>

      <div className='flex flex-col gap-7'>
        <h1 className='text-2xl font-semibold flex gap-3'>
          <TbArrowsLeftRight className='w-7 h-7' />
          API mastery</h1>

        <div className='flex flex-col md:flex-row flex-wrap gap-5'>

          {Skills.API?.map((item: any, index: number) => (
            <div key={index} className='w-full md:max-w-[350px] border 
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

'use client'
import Link from 'next/link'
import React, { useContext } from 'react'
import { TbStack2, TbEye, TbWorldShare } from 'react-icons/tb'
import { Projects } from '@/common/constant/projects'
import { ContainerContext } from '@/context/ContainerProvider'
import { motion } from 'framer-motion'

export default function ProjectsSection() {
  const { setFullPathName } = useContext(ContainerContext)

  return (
    <section id='projects' className='px-[5%]'>
      <div className='w-full flex gap-3'>
        <TbStack2 strokeWidth='1' className='w-14 md:w-16 h-full text-yellow-600' />
        <div>
          <h2 className='text-2xl font-semibold md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-purple-600'>Last Projects</h2>
          <p className='md:text-xl'>Here is my last project.</p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, filter: 'blur(15px)', y: 50 }}
        whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className='flex flex-col md:flex-row gap-5 pt-5'>
          {Projects.slice(0, 3).map((project: any, index: number) => (
            <div key={index}
              className='w-full h-auto md:max-w-[33%] border border-stone-300 rounded-xl
          hover:scale-105 duration-300 flex flex-col dark:border-neutral-800 dark:bg-neutral-800 relative'>
              <a className='absolute px-7 py-1 rounded-bl-xl rounded-tr-xl right-0 bg-black bg-opacity-50 
              flex gap-2 items-center text-white' href={project.urlDirect}>
                <span>
                  Demo
                </span>
                <TbWorldShare className='w-5 h-5 animate-bounce' />
              </a>
              <img src={project.srcImage} alt="projectImage.webp" width={'100%'} height={'100%'}
                className='bg-cover rounded-t-xl' />
              <div className='p-4'>
                <h3 className='font-semibold text-xl'>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <ul className='h-full flex flex-wrap items-end gap-3 pb-4 px-4 justify-self-end'>
                {project.icons.map((icon: any, index_: number) => (
                  <li key={index_} className='tooltip before:text-neutral-700 dark:text-white before:bg-neutral-200 
                  before:dark:bg-white before:content-[attr(data-tooltip)]'
                    data-tooltip={icon.title}>
                    <icon.SvgIcon className={`w-7 h-7 ${icon.class} `} />
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </motion.div>
      <div className='w-full h-24 flex justify-center items-center'>
        <Link href='/all-projects' onClick={() => setFullPathName('/all-projects')}
          className='text-blue-600 dark:text-blue-300 flex gap-2 items-center hover:opacity-70 duration-100 self-end'>View All Project
          <TbEye className='h-full w-6 animate-pulse' />
        </Link>
      </div>
    </section>
  )
}

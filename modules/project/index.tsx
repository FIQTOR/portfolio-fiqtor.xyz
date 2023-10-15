import { Projects } from '@/common/constant/projects'
import React from 'react'
import { TbStack2 } from 'react-icons/tb'

export default function Project() {
  return (
    <section id='projects' className='px-[5%] py-[100px] min-h-[100vh]'>
      <div className='flex gap-[10px]'>
        <TbStack2 strokeWidth='1' className='w-14 md:w-16 h-full' />
        <div>
          <h2 className='text-2xl font-semibold md:text-4xl'>Projects</h2>
          <p className='md:text-xl'>Here is my all project.</p>
        </div>
      </div>
      <div className='flex flex-wrap flex-col md:flex-row gap-[20px] pt-[20px]'>

        {Projects.map((project: any, index: number) => (
          <a key={index} href={project.urlDirect}
          className='w-full h-auto md:max-w-[350px] border-[1px] border-stone-300 rounded-xl
          hover:scale-105 duration-300 flex flex-col dark:border-neutral-800 dark:bg-neutral-800'>
            <img src={project.srcImage} alt="projectImage.webp" width={'100%'} height={'100%'}
              className='bg-cover rounded-t-xl' />
            <div className='p-4'>
              <h3 className='font-bold text-xl'>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <div className='h-full flex flex-wrap items-end gap-[10px] pb-4 px-4 justify-self-end'>
              {project.icons.map((icon: any, index_: number) => (
                <abbr key={index_} title={icon.title}>
                  <icon.SvgIcon className={`w-[30px] h-[30px] ${icon.class}`} />
                </abbr>
              ))}
            </div>
          </a>
        ))}

      </div>
    </section>
  )
}

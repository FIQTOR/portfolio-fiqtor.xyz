import React from 'react'
import { TbStack2 } from 'react-icons/tb'
import Card from './elemets/card'

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
      <Card />
    </section>
  )
}

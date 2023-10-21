"use client"
import React from 'react'
import { Projects } from '@/common/constant/projects'
import { motion, AnimatePresence } from 'framer-motion'
import { TbWorldShare } from 'react-icons/tb'

export default function Card() {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, filter: 'blur(15px)', y: 100 }}
                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                transition={{ delay: 0.25 }}
            >
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-5'>

                    {Projects.map((project: any, index: number) => (
                        <div key={index}
                            className='w-full h-auto border border-stone-300 rounded-xl
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
        </AnimatePresence>
    )
}

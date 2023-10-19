"use client"
import React from 'react'
import { Projects } from '@/common/constant/projects'
import { motion, AnimatePresence } from 'framer-motion'

export default function Card() {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, filter: 'blur(15px)', y: 100 }}
                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                transition={{ delay: 0.25 }}
            >
                <div className='flex flex-wrap flex-col md:flex-row gap-5 pt-5'>

                    {Projects.map((project: any, index: number) => (
                        <a key={index} href={project.urlDirect}
                            className='w-full h-auto md:max-w-[350px] border border-stone-300 rounded-xl
                                hover:scale-105 duration-300 flex flex-col dark:border-neutral-800 dark:bg-neutral-800'>
                            <img src={project.srcImage} alt="projectImage.webp" width={'100%'} height={'100%'}
                                className='bg-cover rounded-t-xl' />
                            <div className='p-4'>
                                <h3 className='font-bold text-xl'>{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                            <div className='h-full flex flex-wrap items-end gap-3 pb-4 px-4 justify-self-end'>
                                {project.icons.map((icon: any, index_: number) => (
                                    <abbr key={index_} title={icon.title}>
                                        <icon.SvgIcon className={`w-[30px] h-[30px] ${icon.class}`} />
                                    </abbr>
                                ))}
                            </div>
                        </a>
                    ))}

                </div>
            </motion.div>
        </AnimatePresence>
    )
}

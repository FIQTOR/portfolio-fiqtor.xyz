'use client'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

export default function Form() {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, filter: 'blur(15px)', y: 100 }}
                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                transition={{ delay: 0.25 }}
            >
                <form action="https://formsubmit.co/taufiq07326@gmail.com" method='POST'
                    className='max-w-sm w-full flex flex-col gap-4 text-stone-600 dark:text-neutral-300'>
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_blacklist" value="spammy pattern, banned term, phrase" />
                    <input type="hidden" name="_subject" value={`New submission! | Website`} />
                    <h1 className='text-4xl font-semibold text-stone-800 dark:text-neutral-200'>Contact Me</h1>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="name">
                            Full name or Company name
                        </label>
                        <input type="text" name='name' id='name' placeholder='example: Indonesia Studio'
                            className='py-1 px-2 outline outline-1 outline-stone-500 duration-300
                rounded-md focus:bg-stone-100 focus:dark:bg-neutral-700
                focus:outline-2 focus:outline-blue-400' required />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="email">
                            Email Address
                        </label>
                        <input type="text" name='email' id='email'
                            className='py-1 px-2 outline outline-1 outline-stone-500 duration-300
                rounded-md focus:bg-stone-100 focus:dark:bg-neutral-700
                focus:outline-2 focus:outline-blue-400' required />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor='type'>
                            What can I help you?
                        </label>
                        <select name="type" id="type" className='py-1 px-2 outline outline-1 outline-stone-500
        rounded-md bg-white dark:bg-neutral-700 focus:bg-stone-100 duration-300
        focus:outline-2 focus:outline-blue-400 cursor-pointer'>
                            <option value="Landing Page">Landing Page</option>
                            <option value="Web App">Web App</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" required
                            className='py-1 px-2 focus:bg-stone-100 rounded-md outline outline-1 outline-stone-500
        focus:outline-2 focus:outline-blue-400 focus:dark:bg-neutral-700'></textarea>
                    </div>
                    <button className='w-fit py-1 px-7 bg-stone-300 dark:bg-neutral-700 rounded-md duration-300 hover:opacity-70'>
                        Submit
                    </button>
                </form>
            </motion.div>
        </AnimatePresence>
    )
}

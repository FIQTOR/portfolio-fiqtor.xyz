'use client'
import { motion } from 'framer-motion';
import React from 'react'

interface squareProps {
    data: any;
}

export default function Square({ data }: squareProps) {
    return (
        <div className='flex gap-px md:gap-1'>
            {data && data.user.contributionsCollection.contributionCalendar.weeks.slice(1).map((week: any, index: number) =>
                <span key={index} className='w-full flex flex-col gap-px md:gap-1'>
                    {week.contributionDays.map((contributionDay: any, index_: number) =>
                        <motion.div key={index_} className={`aspect-square bg-neutral-300 dark:bg-neutral-800`}
                            style={{
                                backgroundColor: `${((contributionDay.contributionCount == 0) ? '' : contributionDay.color)}`
                            }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: (Math.random() * (0.5 - 0.1 + 0.5) + 0.1) }}
                        ></motion.div>
                    )}
                </span>
            )}
        </div>
    )
}

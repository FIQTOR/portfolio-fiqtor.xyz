'use client'
import { motion } from 'framer-motion';
import React from 'react'

interface squareProps {
    data: any;
}

export default function Square({ data }: squareProps) {
    return (
        <div className='w-full flex flex-row justify-between gap-[1px] md:gap-[3px]'>
            {data && data.user.contributionsCollection.contributionCalendar.weeks.slice(1).map((week: any, index: number) =>
                <div key={index} className='w-full flex flex-col gap-[1px] md:gap-[3px]'>
                    {week.contributionDays.map((contributionDay: any, index_: number) =>
                        <motion.div key={index_} className={`w-full aspect-square bg-neutral-300 dark:bg-neutral-800`}
                            style={{
                                backgroundColor: `${((contributionDay.contributionCount == 0) ? '' : contributionDay.color)}`
                            }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: (Math.random() * (1 - 0.1 + 1) + 0.1) }}
                        />
                    )}
                </div>
            )}
        </div>
    )
}

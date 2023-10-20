'use client'
import { motion } from 'framer-motion';
import React from 'react'

interface squareProps {
    color: string;
    key: number;
}

const Square = ({ color, key }: squareProps) => (
    <motion.li key={key} className={`aspect-square bg-neutral-300 dark:bg-neutral-800`}
        style={{
            backgroundColor: `${color}`
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: (Math.random() * (0.5 - 0.1 + 0.5) + 0.1) }}
        viewport={{ once: true, amount: 0.8 }}
    ></motion.li>
)

export default Square;
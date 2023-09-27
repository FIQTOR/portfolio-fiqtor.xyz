
import React from 'react'

export default function Loading(classProps?: string) {
  return (
    <div className={`w-full min-h-[300px] flex justify-center items-center ${classProps}`}>
      <svg xmlns="http://www.w3.org/2000/svg" className='animate-spin mr-3' width="24" height="24"
        viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor"
        fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M12 3a9 9 0 1 0 9 9"></path>
      </svg>
      <p className='text-xl font-bold dark:text-neutral-300'>Loading...</p>
    </div>
  )
}

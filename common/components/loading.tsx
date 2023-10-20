
import React from 'react'

const Loading = (classProps?: string) => (
  <div className={`w-full min-h-[300px] flex justify-center items-center ${classProps}`}>
    <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 animate-spin mr-3'
      viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor"
      fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 3a9 9 0 1 0 9 9"></path>
    </svg>
    <span className='text-xl font-bold dark:text-neutral-300'>Loading...</span>
  </div>
)

export default Loading;
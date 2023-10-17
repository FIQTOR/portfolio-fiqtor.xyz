import React from 'react'
import Skills from './elements/skills'
import About from './elements/about'
import Projects from './elements/projects'
import Header from './elements/header'

export default function index() {
  return (
    <>
      <Header />
      <main className='my-[20vw] md:my-[5vw] flex flex-col gap-[200px]'>
        <About />
        <Skills />
        <Projects />
      </main >
    </>
  )
}

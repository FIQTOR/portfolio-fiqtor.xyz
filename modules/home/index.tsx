import React from 'react'
import Skills from './elements/skills'
import About from './elements/about'
import Projects from './elements/projects'
import Header from './elements/header'

const Home = () => (
  <>
    <Header />
    <main className='my-[20vw] md:my-[5vw] flex flex-col gap-52'>
      <About />
      <Skills />
      <Projects />
    </main >
  </>
)

export default Home;

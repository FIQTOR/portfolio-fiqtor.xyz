import { METADATA } from '@/common/constant/metadata'
import React from 'react'
import Skills from './elements/skills'
import About from './elements/about'
import Projects from './elements/projects'

export default function index() {
  return (
    <>
      <header className='relative w-full h-screen flex flex-col md:flex-row items-center gap-14'>
        <div className='w-full md:w-1/2 h-1/3 md:h-full flex flex-col justify-center pt-14 px-[5%]
        z-[1]'>
          <h1 className='text-5xl'>Hi There,</h1>
          <h2 className='text-5xl'>I'm {METADATA.authors.name}</h2>
          <p className='text-2xl'>I will help you make website responsive and high quality.</p>
        </div>

        <div className='w-full md:w-1/2 h-1/2 md:h-full flex justify-center items-center relative'>
          <svg className='w-full h-full md:w-1/2 z-[-1] fill-neutral-200 dark:fill-neutral-800 md:scale-[2]'
            id="visual" viewBox="0 0 900 900" width="100" height="100" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" version="1.1"><g transform="translate(427.92601285821485 412.79585478676427)"><path d="M173.3 -296.2C191.7 -289.6 150.8 -176.6 174.4 -109.5C198 -42.3 286 -21.2 329.3 25C372.6 71.2 371.2 142.3 346.5 207.6C321.9 272.8 273.9 332.1 212.3 325C150.7 318 75.3 244.5 -9.2 260.4C-93.7 276.4 -187.5 381.8 -216.5 370C-245.5 358.3 -209.8 229.4 -232.1 148.2C-254.4 67 -334.7 33.5 -317.1 10.2C-299.5 -13.2 -183.9 -26.3 -114.8 -26.3C-45.6 -26.3 -22.8 -13.2 -11.4 -23.8C0 -34.3 0 -68.7 38.7 -135.8C77.5 -202.9 155 -302.8 173.3 -296.2"></path></g></svg>
          <img src="/img/src/mobile.webp" alt="mobile.webp" className='z-[1] h-full max-h-[450px] bg-cover absolute' />
        </div>

        <div className='absolute w-full h-full top-0 left-0 z-[-1] overflow-x-hidden'>
          <svg className='w-full h-full fill-neutral-200 dark:fill-neutral-800' id="visual" viewBox="0 0 960 540" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" version="1.1"><g><circle r="13" cx="339" cy="11"></circle><circle r="5" cx="179" cy="143"></circle><circle r="9" cx="575" cy="111"></circle><circle r="8" cx="151" cy="418"></circle><circle r="9" cx="451" cy="106"></circle><circle r="7" cx="264" cy="348"></circle><circle r="9" cx="12" cy="81"></circle><circle r="8" cx="410" cy="256"></circle><circle r="11" cx="227" cy="440"></circle><circle r="6" cx="54" cy="103"></circle><circle r="4" cx="130" cy="69"></circle><circle r="5" cx="422" cy="530"></circle><circle r="9" cx="663" cy="503"></circle><circle r="7" cx="399" cy="471"></circle><circle r="11" cx="716" cy="338"></circle><circle r="11" cx="716" cy="512"></circle><circle r="5" cx="635" cy="516"></circle><circle r="10" cx="26" cy="230"></circle><circle r="6" cx="406" cy="85"></circle><circle r="9" cx="617" cy="69"></circle><circle r="8" cx="163" cy="386"></circle><circle r="6" cx="437" cy="405"></circle><circle r="8" cx="353" cy="247"></circle><circle r="10" cx="878" cy="417"></circle><circle r="8" cx="147" cy="234"></circle><circle r="4" cx="823" cy="162"></circle><circle r="4" cx="35" cy="339"></circle><circle r="4" cx="679" cy="238"></circle><circle r="10" cx="376" cy="143"></circle><circle r="6" cx="656" cy="261"></circle><circle r="10" cx="12" cy="423"></circle><circle r="8" cx="191" cy="314"></circle><circle r="9" cx="767" cy="176"></circle><circle r="10" cx="894" cy="221"></circle><circle r="9" cx="536" cy="452"></circle><circle r="8" cx="429" cy="17"></circle><circle r="7" cx="174" cy="433"></circle><circle r="6" cx="576" cy="500"></circle><circle r="9" cx="890" cy="55"></circle></g>
          </svg>
        </div>
      </header>

      <main className='my-[20vw] md:my-[5vw] flex flex-col gap-[200px]'>
        <About />
        <Skills />
        <Projects />
      </main >
    </>
  )
}

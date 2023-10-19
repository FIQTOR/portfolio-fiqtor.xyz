import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <>
      <header className='w-full h-screen flex flex-col md:flex-row items-center'>
        <div className='w-full h-full flex items-center justify-center'>
          <div className='flex gap-5'>
            <h1 className='text-6xl font-bold text-neutral-600'>
              404</h1>
            <div>
              <p className='text-2xl'>
                PAGE NOT FOUND :(</p>
              <Link href='/' className='text-2xl text-blue-500
              hover:opacity-70'>
                GO TO MAIN PAGE</Link>
            </div>
          </div>
        </div>

        <div className='absolute w-full h-full top-0 left-0 z-[-1] overflow-x-hidden'>
          <svg className='w-full h-full' id="visual" viewBox="0 0 960 540" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" version="1.1">
            <g fill="#d6d3d1">
              <circle r="13" cx="339" cy="11"></circle><circle r="5" cx="179" cy="143"></circle><circle r="9" cx="575" cy="111"></circle><circle r="8" cx="151" cy="418"></circle><circle r="9" cx="451" cy="106"></circle><circle r="7" cx="264" cy="348"></circle><circle r="9" cx="12" cy="81"></circle><circle r="8" cx="410" cy="256"></circle><circle r="11" cx="227" cy="440"></circle><circle r="6" cx="54" cy="103"></circle><circle r="4" cx="130" cy="69"></circle><circle r="5" cx="422" cy="530"></circle><circle r="9" cx="663" cy="503"></circle><circle r="7" cx="399" cy="471"></circle><circle r="11" cx="716" cy="338"></circle><circle r="11" cx="716" cy="512"></circle><circle r="5" cx="635" cy="516"></circle><circle r="10" cx="26" cy="230"></circle><circle r="6" cx="406" cy="85"></circle><circle r="9" cx="617" cy="69"></circle><circle r="8" cx="163" cy="386"></circle><circle r="6" cx="437" cy="405"></circle><circle r="8" cx="353" cy="247"></circle><circle r="10" cx="878" cy="417"></circle><circle r="8" cx="147" cy="234"></circle><circle r="4" cx="823" cy="162"></circle><circle r="4" cx="35" cy="339"></circle><circle r="4" cx="679" cy="238"></circle><circle r="10" cx="376" cy="143"></circle><circle r="6" cx="656" cy="261"></circle><circle r="10" cx="12" cy="423"></circle><circle r="8" cx="191" cy="314"></circle><circle r="9" cx="767" cy="176"></circle><circle r="10" cx="894" cy="221"></circle><circle r="9" cx="536" cy="452"></circle><circle r="8" cx="429" cy="17"></circle><circle r="7" cx="174" cy="433"></circle><circle r="6" cx="576" cy="500"></circle><circle r="9" cx="890" cy="55"></circle>
            </g>
          </svg>
        </div>
      </header>
    </>
  )
}

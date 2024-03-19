"use client"
import Header from '@/components/interface/header'
import LandingPage from '@/components/interface/landing'
import React from 'react'
import Image from 'next/image'
import dashboardImage from '@/public/police1.png'

const Navigation = () => {
  return (
    <div className='min-h-full'>
      
        <main className="flex min-h-screen flex-col items-center justify-between p-5 my-3">
        <Header/>
    <div className='w-full mb-5 '>
    <div className="  bg-center object-cover min-w-full  mt-4 h-60 pt-4 ">
    <Image src={dashboardImage}
      quality={75}
      placeholder='blur'
    
      //sizes='100vw'
      style={{
        width: '100%',
        height: '150%',
      }}
       alt=""/>
      
    </div>
    </div>
    <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
      
    </div>
    <div className="mb-5 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left mt-4">
      <a
        
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Reports{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Find in-depth information about crime.
        </p>
      </a>

      <a
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Learn{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Learn about how to protect yourself from attacks and rape&nbsp;quizzes!
        </p>
      </a>
        <a>
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Reviews{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          
        </p>
      </a>

      <a>
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Caveats{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
          
        </p>
      </a>
    </div>
  </main>
    </div>
  )
}

export default Navigation
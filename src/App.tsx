import React from 'react'

import Contacts from './components/contacts'
import Projects from './components/projects'
import Experience from './components/experience'

import './index.css'

const App: React.FC = () => {

  return (
    <div className='flex flex-row bg-gradient-to-br from-yellow-400/90 to-amber-500/85'>
      <div className='left-side-component basis-6/12 py-16 mr-16 ml-32 pl-7 pr-5 text-xl tracking-wide'>
        <div className='mb-2 pt-32'>
          <h2 id='about-me'>About me</h2>
          <div className='mt-2'>
            Hello, my name is Ivan.<br/>
            Having studied few foreign languages and gathered rich experience in GameDev and social marketing, 
            I've made a decision to move forward and came to the field of web development.<br/>
            I design and develop sites and landing pages that may look simple yet retain all the necessary features 
            without any compromise on quality.<br/>
            At the moment I work with <b>HTML5, CSS3, SCSS, Javascript, Typescript, React, Redux and Tailwind</b>, but the list will 
            get bigger with the time as we all are constantly growing.<br/>
          </div>
        </div>

        <div className='mb-2 pt-12'>
          <h2 id='experience'>Major Experience</h2>
          <Experience/>
        </div>

        <div className='mt-12'>
          <h2 id='projects'>Projects</h2>
          <Projects/>
        </div>

        <div className='mt-20 text-lg'>
          <p>Loosely coded in Visual Studio Code by yours truly. Built with Vite and Tailwind CSS, deployed with Vercel.</p>
        </div>
      </div>

      <div className='right-side-component sticky top-28 max-h-screen basis-5/12 m-16 mt-28'>
        <img src='../public/cover.png' className='h-64 ml-20'/>
        <div className='text-right text-2xl w-72'>Ivan Balyko</div>
        <h1 className='text-right w-72'>Web developer</h1>

        <div className='flex flex-row mt-4 mb-4 ml-4 text-lg'>
          <a href="#about-me" className='mr-2 h-7 box-border border-current hover:border-b-2'>About me</a>
          <a href="#experience" className='mr-2 h-7 box-border border-current hover:border-b-2'>Experience</a>
          <a href="#projects" className='h-7 box-border border-current hover:border-b-2'>My projects</a>
        </div>

        <Contacts/>

      </div>
    </div>
  )
}

export default App

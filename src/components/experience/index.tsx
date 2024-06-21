import React from "react"

const Experience: React.FC = () => (
  <div className="mt-2">
    <a href="https://4frag.ru/" target="_blank"
      className="flex flex-row hover:drop-shadow-lg rounded hover:bg-slate-100/35"
    >
      <div className="w-40 text-nowrap text-sm pt-3.5 pl-1 shrink-0">
        2014 — PRESENT
      </div>
      <div className="ml-4 mt-2 mb-2 mr-2">
        <h3 className="font-bold">Marketing & Graphic Design &#183; 4FRAG</h3>
        <p className="text-base mt-2">Small e-store specialized in selling PC peripherals. 
          Main job is to provide content and spread it into popular social media with occasionally 
          creating extra traffic. Creation graphic materials for advertising.
          Filling shop website with content is also included in responsibilities.
        </p>
        <div className="flex flex-row mt-2 text-base">
          <p className="mr-2 bg-orange-600/75 rounded pl-1 pr-1">SMM</p>
          <p className="mr-2 bg-orange-600/75 rounded pl-1 pr-1">Graphic design</p>
          <p className="mr-2 bg-orange-600/75 rounded pl-1 pr-1">Marketing</p>
          <p className="mr-2 bg-orange-600/75 rounded pl-1 pr-1">Article writing</p>
        </div>
      </div>
    </a>



    <a href="https://gamenet.ru/" target="_blank"
      className="flex flex-row hover:drop-shadow-lg mt-1 rounded hover:bg-slate-100/35"
    >
      <div className="w-40 text-nowrap text-sm pt-3.5 pl-1 shrink-0">
        MAR 2013 — JAN 2016
      </div>
      <div className="ml-4 mt-2 mb-2 mr-2">
        <h3 className="font-bold">Team Lead &#183; GameNet</h3>
        <p className="text-base mt-2">Professional and carreer growth in big 
          international company, specialized in desktop games. At that time I used to 
          work with multiple tasks and games including AAA-projects. 
          Besides, I got quite big experience running department with over 15 people.</p>
        <div className="flex flex-row mt-2 text-base">
          <p className="mr-2 bg-orange-600/75 rounded pl-1 pr-1">Team Lead</p>
          <p className="mr-2 bg-orange-600/75 rounded pl-1 pr-1">Game Master</p>
          <p className="mr-2 bg-orange-600/75 rounded pl-1 pr-1">Customer Service</p>
          <p className="mr-2 bg-orange-600/75 rounded pl-1 pr-1">Billing</p>
        </div>
      </div>
    </a>
  </div>
)

export default Experience;
import React from "react"

import kanbanImg from "../../assets/kanban.png"
import shopImg from "../../assets/shop.png"
import todoImg from "../../assets/todo-list.png"

const Projects: React.FC = () => (
  <div className="mt-2">
    <a href="https://kanban-beryl-seven.vercel.app/" target="_blank"
      className="flex flex-row hover:drop-shadow-lg rounded hover:bg-slate-100/35"
    >
      <img 
        src={kanbanImg} 
        alt="kanban application" 
        loading="lazy" 
        width="200" height="48"
        className="rounded border-2 m-2"  
      />
      <div className="ml-4 mt-2 mb-2 mr-2">
        <h3 className="font-bold">Kanban</h3>
        <p className="text-lg mt-2">Simple kanban application. Easily swap tasks on one board or move to another.</p>
        <div className="flex flex-row mt-2 text-base">
          <p className="mr-2 bg-orange-600/75 rounded pl-1 pr-1">React</p>
          <p className="mr-2 bg-orange-600/75 rounded pl-1 pr-1">Redux Toolkit</p>
          <p className="mr-2 bg-orange-600/75 rounded pl-1 pr-1">Typescript</p>
          <p className="mr-2 bg-orange-600/75 rounded pl-1 pr-1">Tailwind</p>
        </div>
      </div>
    </a>

    <a href="https://shop-react-redux.vercel.app/" target="_blank"
      className="flex flex-row hover:drop-shadow-lg mt-1 rounded hover:bg-slate-100/35"
    >
      <img 
        src={shopImg} 
        alt="shop" 
        loading="lazy" 
        width="200" height="48"
        className="rounded border-2 m-2"  
      />
      <div className="ml-4 mt-2 mb-2 mr-2">
        <h3 className="font-bold">Phone Shop</h3>
        <p className="text-lg mt-2">Small shop to sell goods, for example, telephones.</p>
        <div className="flex flex-row mt-2 text-base">
          <p className="mr-2 bg-orange-600/75 rounded pl-1 pr-1">React</p>
          <p className="mr-2 bg-orange-600/75 rounded pl-1 pr-1">Redux</p>
          <p className="mr-2 bg-orange-600/75 rounded pl-1 pr-1">Javascript</p>
          <p className="mr-2 bg-orange-600/75 rounded pl-1 pr-1">Bootstrap</p>
        </div>
      </div>
    </a>

    <a href="https://todo-list-git-master-ivans-projects-13cba397.vercel.app/" target="_blank"
      className="flex flex-row hover:drop-shadow-lg mt-1 rounded hover:bg-slate-100/35"
    >
      <img 
        src={todoImg}
        alt="todo" 
        loading="lazy" 
        width="200" height="48"
        className="rounded border-2 m-2"  
      />
      <div className="ml-4 mt-2 mb-2 mr-2">
        <h3 className="font-bold">Todo List</h3>
        <p className="text-lg mt-2">Simple application made solely with React and classic Javascript.</p>
        <div className="flex flex-row mt-2 text-base">
          <p className="mr-2 bg-orange-600/75 rounded pl-1 pr-1">React</p>
          <p className="mr-2 bg-orange-600/75 rounded pl-1 pr-1">Javascript</p>
        </div>
      </div>
    </a>
  </div>
)

export default Projects;

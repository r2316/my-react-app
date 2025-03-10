import React from 'react';
import { projects } from './Projectdata';
import Starfield from 'react-starfield';
export default function Project() {
  
let projectsui =projects.map((project) => (
  <div key={project.id} className="flex flex-col border-2 p-5 bg-black text-white border-orange-500">
    <img src={project.image} className="h-56 w-full" alt={project.title} />
    <div className="flex flex-col mt-10 justify-center ">
      <h1 className="mb-5 text-2xl font-bold text-center">{project.title}</h1>
      <p>{project.description}</p>
      <div className="flex justify-evenly text-center">
        <div className="my-5 border-2 px-5 rounded-[3px] py-1 bg-orange-500">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
        <div className="my-5 border-2 px-5 rounded-[3px] py-1 bg-orange-500">
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
        </div>
      </div>
    </div>
  </div>
   
))
  return(
  
    <div className="relative">
      <Starfield
        starCount={5000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      <div className="grid grid-cols-3 gap-10 w-9/10 mx-auto my-20 z-10 relative">
        {projectsui}
      </div>
    </div>

  );
}
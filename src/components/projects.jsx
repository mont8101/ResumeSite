import React from 'react'
import data from "../data/projects.json"

export default function Projects(){
    const { projects } = data;
    const openLink = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return(
        <div id='Projects' className='flex flex-col justify-center items-center'>
            <span className='text-white font-extrabold text-5xl mb-8 text-center'>Recent Project Summary</span>
            <div className='grid grid-cols-1 md:max-w-3/5 px-4 md:px-0'>
                {projects.map((project) =>(
                <div className='flex flex-col mb-6 p-4 border-1 rounded-lg border-white text-white shadow-surround shadow-cyan-500 transition-all duration-200 hover:shadow-cyan-300'>
                    <span className='font-bold text-2xl'>{project.title}</span>
                    <span className='pt-2'>{project.description}</span>
                    <div className='flex flex-wrap mt-2'>
                        {project.skills.map((skill) => (
                            <span className='py-1 px-1.5 me-2 mb-2 text-sm font-medium rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 group-hover:from-blue-500 group-hover:to-cyan-500 text-white focus:ring-2 focus:outline-none focus:ring-cyan-800'>{skill}</span>
                        ))}
                    </div>
                    {project.blog &&
                    <div className='flex justify-end'>
                        <button onClick={(() => openLink(project.blog))} className='cursor-pointer relative inline-flex items-end justify-end p-0.5 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-blue-500 to-cyan-500 group-hover:from-blue-500 group-hover:to-cyan-500 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-cyan-800'>
                            <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-950 rounded-md group-hover:bg-transparent'>Blog</span>
                        </button>
                    </div>
                    }
                </div>
                ))}
            </div>
        </div>
    )
}
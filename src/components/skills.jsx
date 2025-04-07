import React from 'react'
import skills  from '../data/skills.json'
import Pills from './pills'

export default function Skills ()  {
    const openLink = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return(
        <div id='Skills' className="flex flex-col justify-center items-center px-4">
            <span className='text-white font-extrabold text-5xl mb-8 text-center'>Skills</span>
            <div className='flex flex-col col text-white border-white border-1 rounded-lg p-4 mr-4 mb-4 md:mb-0 w-full shadow-surround shadow-cyan-500 transition-all duration-200 hover:shadow-cyan-300'>
                <span className='font-bold mb-2'>Languages</span>
                <Pills data={skills.languages}/>
                <span className='font-bold mb-2'>Frameworks</span>
                <Pills data={skills.frameworks}/>
                <span className='font-bold mb-2'>RDBMS</span>
                <Pills data={skills.db}/>
                <span className='font-bold mb-2'>NOSQL</span>
                <Pills data={skills.nosql}/>
                <span className='font-bold mb-2'>Cloud Development</span>
                <Pills data={skills.cloud}/>
                <span className='font-bold mb-2'>AI</span>
                <Pills data={skills.ai}/>
                <span className='font-bold mb-2'>Other Tools</span>
                <Pills data={skills.other}/>             
            </div>
        </div>
    )
}
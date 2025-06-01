import React from 'react'
import Pills from './pills'
import data from '../data/certs.json'

export default function Certs ()  {
    const { certs } = data;
    const openLink = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return(
        <div id="Certs" className="flex flex-col justify-center items-center">
            <span className='text-white font-extrabold text-5xl mb-8 text-center'>Certifications</span>
            <div className='grid grid-cols-1 md:max-w-3/5 px-4 md:px-0'>
                {certs.map((cert) => (
                <div key={cert.title} className='flex flex-col p-4 border-1 rounded-lg border-white text-white shadow-surround shadow-cyan-500 transition-all duration-200 hover:shadow-cyan-300'>
                    <span className='font-bold text-3xl'>{cert.title}</span>
                    <span className='py-2'>{cert.description}</span>
                    <Pills data={cert.skills}/>
                    <div className='flex justify-end'>
                        <button className='cursor-pointer relative inline-flex items-end justify-end p-0.5 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-blue-500 to-cyan-500 group-hover:from-blue-500 group-hover:to-cyan-500 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-cyan-800'
                            onClick={(() => openLink(cert.link))}>
                                <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-950 rounded-md group-hover:bg-transparent'>
                                    {cert.linkText}
                                </span>
                        </button>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}
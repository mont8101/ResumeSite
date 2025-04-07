import React from 'react'

export default function Pills({data}) {
    return(
        <div className='flex flex-wrap'>
            {data.map((skill) => (
                <span key={skill} className='py-1 px-1.5 me-2 mb-2 text-sm font-medium rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 group-hover:from-blue-500 group-hover:to-cyan-500 text-white focus:ring-2 focus:outline-none focus:ring-cyan-800'>{skill}</span>
            ))}
        </div>
    )
}
import React, { useState, useEffect } from 'react'

export default function Hero ()  {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setTimeout(() => setAnimate(true), 700); 
    }, []); 

    return(
        <div className={`transition-all ease-in-out w-full flex justify-center items-center
            ${animate ? "translate-y-0 opacity-100 duration-1000" : "translate-y-8 opacity-0 duration-200"}`}>
            <span className="absolute mx-auto py-8 flex border w-fit bg-gradient-to-r blur-xl from-purple-600 via-cyan-500 to-green-400 bg-clip-text text-6xl md:text-8xl box-content font-extrabold text-transparent text-center select-none">
                Ben Montgomery
            </span>
            <h1 className="relative top-0 w-fit h-auto py-8 justify-center flex bg-gradient-to-r items-center from-purple-600 via-cyan-500 to-green-400 bg-clip-text text-6xl md:text-8xl font-extrabold text-transparent text-center select-auto">
                Ben Montgomery
            </h1>
        </div>
    )
}
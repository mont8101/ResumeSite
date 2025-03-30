import React, {useState} from 'react'

export default function Nav() {
    const [open, setOpen] = useState(); 

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -90; // Adjust this value based on your fixed header height
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };
    function toggleNav(){    
        setOpen(!open);
    }


return(
    <nav className='bg-gray-950 fixed w-full z-20 top-0 start-0 border-b-1 border-gray-600'>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between md:justify-center mx-auto p-4">
            <div className='flex flex-col visible md:hidden'>
                <a href="https://linkedin.com/in/ben-m" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Ben Montgomery</span>
                </a>
                <div className='self-center text-l font-semibold whitespace-nowrap text-gray-400'>
                    Software Consultant
                </div>
            </div>
            <div className="flex md:order-2 space-x-3 md:space-x-0">
                    <button type="button" onClick={(() => toggleNav())} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600">
                    <span className="sr-only">Open main menu</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
            <div className={`w-full md:hidden text-white
                            ${open ? 'flex flex-col' : 'hidden'}`}>
                <button onClick={() => {scrollToSection("About"), toggleNav()}} className='text-end'>
                    <span className="py-2.5 transition-all ease-in duration-75 rounded-md">
                        About
                    </span>
                </button>
                <button onClick={() => {scrollToSection("Projects"), toggleNav()}} className='text-end'>
                    <span className="py-2.5 transition-all ease-in duration-75 rounded-md ">
                        Project Summary
                    </span>
                </button>
                <button onClick={() => {scrollToSection("Contact"), toggleNav()}} className='text-end'>
                    <span className="py-2.5 transition-all ease-in duration-75 rounded-md">
                    Contact
                    </span>
                </button>
            </div>
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                <button onClick={() => scrollToSection("About")} className="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 text-white focus:ring-4 focus:outline-none focus:ring-blue-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-950 rounded-md group-hover:bg-transparent">
                        About
                    </span>
                </button> 
                <button onClick={() => scrollToSection("Projects")} className="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-blue-500 to-cyan-500 group-hover:from-blue-500 group-hover:to-cyan-500 text-white focus:ring-4 focus:outline-none focus:ring-cyan-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-950 rounded-md group-hover:bg-transparent">
                        Project Summary
                    </span>
                </button>
                <button onClick={() => scrollToSection("Contact")} className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-cyan-500 to-green-400 group-hover:from-cyan-500 group-hover:to-green-400 text-white focus:ring-4 focus:outline-none focus:ring-green-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-950 rounded-md group-hover:bg-transparent">
                        Contact
                    </span>
                </button>
            </div>
        </div>
    </nav>
)}
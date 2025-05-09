import React from 'react'

export default function About(){
    
    return(
        <div id='About' className='grid grid-cols-1 md:grid-cols-2 items-center justify-center px-4 md:px-0'>
            <div className='flex flex-col col text-white border-white border-1 rounded-lg p-4 mr-4 mb-4 md:mb-0 max-w-96 w-full md:h-72 shadow-surround shadow-cyan-500 transition-all duration-200 hover:shadow-cyan-300'>
                <div className='flex flex-row  font-bold text-3xl items-center pb-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                    </svg>

                    <span className='pl-1'>Education</span>
                </div>
                <div className='flex flex-col'>
                    <span className='text-lg font-semibold'>
                        University of St. Thomas - St. Paul, MN
                    </span>
                     <span>
                        Sept 2018 - May 2022   
                     </span>
                    <span>
                        Bachelor of Science: Computer Science		
                    </span>
                    <span>
                        Focuses: Full-stack Development and Information Security
                    </span>
                </div>
            </div>
            <div className='flex flex-col text-white border-white border-1 rounded-lg p-4 mr-1 max-w-96 md:h-72 shadow-surround shadow-cyan-500 transition-all duration-200 hover:shadow-cyan-300'>
                <div className='flex flex-row  font-bold text-3xl items-center pb-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                    </svg>
                    <span className='pl-1'>Work Experience </span>
                </div>
                <div className='flex flex-col'>
                    <span className='text-lg font-semibold'>
                        Fishbowl Solutions - St. Louis Park, MN
                    </span>
                     <span>
                        June 2022 - Present  
                     </span>
                    <span>
                        Software Consultant	
                    </span>
                    <span className='mb-2'>
                        Responsibilities: Develop, integrate, and customize software utilizing development technologies such as Java, JavaScript, SQL, and relational databases. Implement solutions within client's architectural environments. 
                    </span>
                </div>
            </div>
        </div>
    )
}
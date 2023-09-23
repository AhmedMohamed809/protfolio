import React from 'react'
import SectionHeading from './SectionHeading'
import { projectsData } from '@/lib/data'
import { type } from 'os'
import Image from 'next/image'

function Projects() {
  return (
    <section>
        <SectionHeading>My Projects</SectionHeading>
        <div>

            {projectsData.map((project,index)=>(
                <React.Fragment key={index}>
                <Project {...project}/>
                </React.Fragment>

            ))}
        </div>
    </section>
  )
}

type ProjectProps = (typeof projectsData)[number];
function Project({
    title,
    description,
    tags,
    imageUrl,
}: ProjectProps){
    return <section className='bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem]'>
        <div className=' py-4 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col'>
        <h3 className=' text-2xl font-semibold'>{title}</h3>
        <p className=' mt-2 leading-relaxed text-gray-700'>{description}</p>
        <ul className=' flex flex-wrap mt-4 gap-2 mt-auto'>
            {tags.map((tag,index)=>(
                <li key={index} className=' bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wide text-white rounded-full

                '>{tag}</li>
            ))}
        </ul>
        </div>
        <Image src={imageUrl} alt={title} quality={95} className=' absolute top-8 -right-40 w-[28.25rem]  rounded-top-lg shadow-2xl' />


    </section>
}
export default Projects
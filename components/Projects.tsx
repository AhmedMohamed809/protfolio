import React from 'react'
import SectionHeading from './SectionHeading'
import { projectsData } from '@/lib/data'
import { type } from 'os'

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
    return <article>

        
    </article>
}
export default Projects
'use client';
import React from 'react'
import { motion } from "framer-motion";
import SectionHeading from './SectionHeading'

function About() {
  return (
    <motion.section className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
    initial={{opacity:0,y:100}}
    animate={{opacity:1,y:0}}
    transition={{delay:0.175}}
    id='about'
    >
     <SectionHeading>About me</SectionHeading>
     <div className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Computer Science</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and PSQL
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">part-time position</span> as a junior software
        developer.
      </div>

      <div>
        <span className="italic">When I'm not coding</span>, I enjoy take some pictures , go to the Gym. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">Clean code book</span>. I'm also
        learning how to play the guitar.
      </div>
    </motion.section>
  )
}

export default About
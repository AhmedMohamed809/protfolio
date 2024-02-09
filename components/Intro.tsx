"use client";
import React from 'react'
import Image from "next/image"
import {delay, motion} from "framer-motion"
import Link from 'next/link';
import {BsArrowRight, BsGithub, BsLinkedin} from "react-icons/bs";
import {HiDownload} from "react-icons/hi";
import { FaGithubSquare } from 'react-icons/fa';
function Intro() {
  return (
    <section id='home' className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-28'>
        <div className='flex items-center justify-center'>
            <div className='relative'>
                <motion.div 
                initial={{opacity:0 ,scale:0}}
                animate={{opacity:1 ,scale:1}}
                transition={{
                    type:"tween",
                    duration:0.2,
                }}>

                <Image src="https://lh3.googleusercontent.com/a/ACg8ocJZ-kNrQjSyA8_5QQYW-9JmbDs5J8T1H2OR9LANcgqv9A=s288-c-no"
                 alt="my_photo" width="192" height="192" quality="95" priority={true}
                  className='h-24 w-24 rounded-full border-white shadow-xl object-cover border-[0.35rem]' />
                </motion.div>
                 <motion.span className='text-4xl absolute bottom-0 right-0'
                 initial={{opacity:0 ,scale:0}}
                 animate={{opacity:1 ,scale:1}}
                 transition={{
                    type:"spring",
                    stiffness:125,
                    delay:0.1,
                    duration:0.7,
                }}
                 >
                    👋
                  </motion.span>
            </div>

        </div>

        <motion.h1 className='mb-10 mt-4 px-4 text-2xl font-medium leading-[1.5] sm:text-4xl'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        >
        <span className="font-bold">Hello, I'm Ahmed Mohamed.</span> I'm a{" "}
        <span className="font-bold">a junior full-stack developer</span> I enjoy
        building <span className="italic">sites</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
        </motion.h1>
      
      <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 text-lg font-medium px-4'
      initial={{opacity:0 ,y:100}}
      animate={{opacity:1 ,y:0}}
      transition={
        {
          delay:0.1,
        }
      }>
       <Link href="mailto:Ahmedabdulalgane@gmail.com"  target='_blank' className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition
        
        ' > Contact me here <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition'/></Link>
        <a href="/Ahmed_CV.pdf" download  className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10' >Download CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition'/></a>
        <a href="https://www.linkedin.com/in/ahmed-mohamed-193005242/" target='_blank' className='bg-white   p-4 text-gray-700 flex items-center gap-2 rounded-full border border-black/10 outline-none focus:scale-[1.15] hover:text-gray-950 hover:scale-[1.15] active:scale-105 transition cursor-pointer'> <BsLinkedin/></a>
        <a href="https://github.com/AhmedMohamed809" target='_blank' className='bg-white   p-4 text-gray-700 flex text-[1.35rem] items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer'> <FaGithubSquare/></a>

      </motion.div>
    </section>
  )
}

export default Intro
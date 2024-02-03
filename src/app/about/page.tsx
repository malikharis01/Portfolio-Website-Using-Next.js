"use client"

import Image from "next/image";
import Link from "next/link";
import { Public_Sans } from 'next/font/google'
import { DM_Sans } from 'next/font/google'
import { Nova_Square } from "next/font/google";
const nova = Nova_Square({ subsets: ['latin'], weight: '400', style: 'normal' })

const mont = Public_Sans({ subsets: ['latin'], weight: '900', style: 'normal' })
const dm = DM_Sans({ subsets: ['latin'], weight: '400', style: 'normal' })



export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div
        className="flex items-center w-full h-full pt-24 bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <div className=" space-y-2">
          {/* <h1 className={`text-[50px] text-white font-semibold ${nova.className}`}> */}
        
          <h1 className={`text-transparent bg-clip-text text-5xl bg-gradient-to-r from-purple-500 to-red-500 ${mont.className}`}>About Me</h1>
         
          
          </div>
          <p className="text-gray-200 hidden md:block font-medium leading-8">
          I'm a full-stack developer specialised in frontend and backend development for complex scalable web apps. I write about web development on my blog and regularly speak at various web conferences and meetups. Want to know how I may help your project? Check out my project case studies and resume.
          </p>
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <div className=" flex flex-col content-center items-center">
                <h1 className={`text-transparent bg-clip-text text-3xl bg-gradient-to-r from-purple-500 to-red-500 ${mont.className}`}>2+</h1>
                <h1 className={`text-transparent bg-clip-text text-md bg-gradient-to-r from-purple-500 to-red-500 ${mont.className}`} >Years of Experience</h1>
            </div>
            <div className=" flex flex-col content-center items-center">
                <h1 className={`text-transparent bg-clip-text text-3xl bg-gradient-to-r from-purple-500 to-red-500 ${mont.className}`}>5+</h1>
                <h1 className={`text-transparent bg-clip-text text-md bg-gradient-to-r from-purple-500 to-red-500 ${mont.className}`} >Projects Completed</h1>
            </div>
            
           
          </div>
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link
              href="/"
              className=" transform hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out rounded-2xl group relative bg-blue-500 hover:bg-blue-600 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              Download CV
            </Link>
            
           
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-[10]">
        <Image
          src="/horse.png"
          alt="horse"
          height={300}
          width={300}
          className="absolute right-55 top-40"
        />

        <Image src="/cliff.webp" alt="cliff" width={480} height={480} />
      </div>

      <div className="absolute bottom-0 z-[5] w-full h-auto">
        <Image
          src="/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-full"
        />
      </div>

      <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-0 left-0 z-[10]"
      />
    </main>
  );
}
import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";
import { Public_Sans } from 'next/font/google'
import { DM_Sans } from 'next/font/google'
import Link from "next/link";

const mont = Public_Sans({ subsets: ['latin'], weight: '900', style: 'normal' })
const dm = DM_Sans({ subsets: ['latin'], weight: '400', style: 'normal' })
const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
       <Link href="/home">
      <div className="flex flex-row gap-3 items-center">
        <div className="relative">
           
          <Image
            src="/c.jpg"
            alt="logo"
            width={40}
            height={40}
            className="w-full h-full object-contain rounded-full"
          />
         
        </div>
        <h1 className={`text-white text-[25px] font-semibold ${mont.className}`}>
          My{" "}
          <span className={`text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 ${mont.className}`}>
            {" "}
            Portfolio{" "}
          </span>
        </h1>
      </div>
      </Link>

      <div className="flex flex-row gap-5 mb-2">
        {Socials.map((social) => (
          <Image className=" rounded-xl"
            key={social.name}
            src={social.src}
            alt={social.name}
            width={28}
            height={28}
          />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
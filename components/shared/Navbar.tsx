"use client"
import {  SignedIn, UserButton } from "@clerk/nextjs"
import { motion } from "framer-motion"
import Link from "next/link"

function Navbar() {
  return (
    <motion.div
      initial={{ y: "-40px", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", duration: 1 }}

      className='w-full  py-4 border-b shadow-sm z-20  absolute top-0'>


      <div className="flex-between lg:container">

        {/*-- Logo section --*/}
        <Link href="/home" className="cursor-pointer ml-2 rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white">
          Atemporal
        </Link>


        {/*-- Sign section --*/}
        <div className='block'>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>


      </div>



    </motion.div>
  )
}

export default Navbar

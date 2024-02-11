"use client"
import Image from "next/image"
import { motion } from "framer-motion"

function Popular() {
  return (
    <div className="flex-1 w-full bg-white relative md:col-span-5 big-border min-h-[40vh] pt-5 px-3 pb-10">

      {/*-- Clip part --*/}
      <Image src="/images/clip.png" alt="" width={100} height={100} className="absolute -top-[60px] right-0 rotate-[5deg] z-10" />
      <motion.h1
      
        drag
        whileDrag={{ scale: 0.5 }}
        dragSnapToOrigin
        className="note-card absolute -top-4 right-0 rotate-[5deg] w-full max-w-[500px] max-h-[200px] h-screen px-5  rounded-md shadow-lg font-kalam text-[18px] pt-[1px]">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas mollitia ipsum optio, voluptate animi ab facilis consequuntur facere, odit aliquid odio aut harum fugit soluta illo officiis illum neque sapiente!
      </motion.h1>


      {/*-- Rest of the content --*/}
      <div className="mt-[150px] md:mt-[100px]">
        <Image src="/icons/timeline.png" alt="" width={80} height={80} />
        <h2 className="mr-2 text-[40px] font-kalam font-semibold tracking-tight underline">Current Story</h2>
        <h2 className="mr-2 text-[40px] font-kalam tracking-tight">First Arc: The Man Under the Rain</h2>
      </div>

      <div className="py-4 font-mono text-xl text-neutral-600">
        <span className="font-bold font-kalam text-[25px] text-neutral-800">Overview:</span> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus quia fugiat nihil earum natus, ducimus in veniam tenetur ipsa debitis at deserunt cumque eius! Ut odit nihil at ad accusantium reiciendis voluptatibus quia perspiciatis consectetur nulla libero, ratione aliquid id!
      </div>

      <div className="flx-1 min-h-[100px] big-border py-2 pt-5 flex-row flex items-center">
        <h1 className="font-bold font-kalam text-[25px] text-neutral-800">Your Task: <span className="font-thin"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, ullam?</span> </h1>

        <div className="font-kalam my-1 text-5xl flex items-center shadow border w-fit px-5 py-2 border-md rounded cursor-poi">
          Send Answer
          <Image src="/icons/send.png" alt="" width={80} height={80} />

        </div>
      </div>



    </div>
  )
}

export default Popular

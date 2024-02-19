"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import Profile from "./Profile"

function Feed() {
  return (
    <div className="flex-1 w-full bg-white relative md:col-span-5 big-border min-h-[40vh] pt-5 px-3 pb-10">

      <Profile />


    </div>
  )
}

export default Feed

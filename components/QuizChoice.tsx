"use client";
import { motion } from "framer-motion"

interface Props {
  index: number,
}

function QuizChoice({ index }: Props) {
  return (
    <motion.div
      initial={{ y: "40px", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", delay: index/5, duration: 1 }}

      className="w-full flex flex-row py-5 px-1 items-center cursor-pointer">

      <div className="mx-4 border px-3 py-1 rounded-md bg-black text-white font-kalam font-bold">
        {index}
      </div>

      <p className="font-kalam  text-[20px] text-neutral-500" >Lorem ipsum dolor sit, amet consectetur adipisicing.</p>

    </motion.div>
  )
}

export default QuizChoice

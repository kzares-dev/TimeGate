"use client";
import { createUser } from "@/lib/actions/user.action";
import { motion } from "framer-motion"
import { useEffect } from "react";

interface Props {
  index: number,
  isActive?: boolean
  clickOnOption: (i: number) => void
}

function QuizChoice({ index, isActive, clickOnOption }: Props) {


  useEffect(() => {

    const user = createUser({
      clerkId: "akmlc",
      email: "string",
      username: "string",
      photo: "string",
    })
      .then((data) => console.log(data))
      .catch(err => console.log(err))

  }, [])

  return (
    <motion.div
      initial={{ y: "40px", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", delay: index / 5, duration: 1 }}

      onClick={() => clickOnOption(index)}
      className={`w-full flex flex-row py-5 px-1 items-center cursor-pointer hover:bg-gray-50 hover:text-black transition-all rounded-md border   ${isActive ? "border-black bg-gray-50" : " hover:border-gray-200 border-white" }`}>

      <div className="mx-4 border px-3 py-1 rounded-md bg-black text-white font-kalam font-bold ">
        {index}
      </div>

      <p className="font-kalam  text-[20px] text-neutral-500 " >Lorem ipsum dolor sit, amet consectetur adipisicing.</p>

    </motion.div>
  )
}

export default QuizChoice

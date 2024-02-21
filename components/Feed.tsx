"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import Profile from "./Profile"
import { useEffect, useState } from "react"
import { useUser } from "@clerk/nextjs"
import { getUserLastRecords } from "@/lib/actions/record.action"


function Feed() {
  const { user } = useUser();
  const [userRecords, setUserRecords] = useState<any>([1, 2, 3, 4])

  useEffect(() => {
    if (!user?.id) return

    getUserLastRecords(user.id).then((data) => console.log(data))
  }, [user?.id])


  return (
    <div className="flex-1 w-full bg-white relative md:col-span-5 big-border min-h-[40vh] pt-5 px-3 pb-10">
      <Profile />

      <div className="p-5 flex flex-col">

        <h2 className="subheading text-2xl"> Quiz recientes: </h2>

        <div className="flex flex-col gap-3 py-4">

          {userRecords.map((record: any, idx: number) => (
            <span key={idx} className="w-full flex-row gap-4 cursor-pointer ">

              <div className="flex flex-row gap-2">
                <Image src="/icons/check-black.svg" alt="" width={20} height={20} />
                <p className="subheading text-[20px]"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, facere! </p>
              </div>


            </span>
          ))}

        </div>

      </div>

    </div>
  )
}

export default Feed

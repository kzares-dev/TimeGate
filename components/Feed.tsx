"use client"
import Image from "next/image"
import Profile from "./Profile"
import { useEffect, useState } from "react"
import { useUser } from "@clerk/nextjs"
import { getUserLastRecords } from "@/lib/actions/record.action"
import Link from "next/link"
import RandomQuiz from "./RandomQuiz"


function Feed() {
  const { user } = useUser();
  const [userRecords, setUserRecords] = useState<any>([])

  useEffect(() => {
    if (!user?.id) return

    getUserLastRecords(user.id).then((data) => setUserRecords(data));
  }, [user?.id])

  return (
    <div className="flex-1 w-full bg-gray-50/40 relative md:col-span-5 big-border min-h-[40vh] pt-5 md:px-3 pb-10">
      <Profile />

      <div className="md:p-5 flex flex-col">


        <h2 className="subheading text-2xl"> Quiz recientes: </h2>
        <div className="flex flex-col gap-3 py-4">

          {/*-- This is for loading the user record --*/}
          {typeof (userRecords) === 'string' && <h1 className="h-auto w-full flex-center subheading font-bold"> {userRecords} </h1>}

          {/*-- If the user record is an array, then render it --*/
            userRecords[0]?.quiz && userRecords.map((record: any, idx: number) => (
              <span key={idx} className="w-full flex-row gap-4 cursor-pointer ">

                <div className="flex flex-row gap-2">
                  <Image src="/icons/check-black.svg" alt="" width={20} height={20} />

                  <Link href={`/results/user=${user?.id}&quiz=${record.quiz}`}>
                    <p className="subheading text-[15px] md:text-[20px]"> {record.title} </p>
                  </Link>

                </div>

              </span>
            ))
          }

          {/*-- If is not any itm then render shrimmer --*/}
          {!userRecords[0]?.quiz && typeof(userRecords) !== "string" && <div className="flex flex-col gap-4">
            <div className="w-full h-[25px] bg-gray-200 animate-pulse rounded-md " />
            <div className="w-full h-[25px] bg-gray-200 animate-pulse rounded-md " />
            <div className="w-full h-[25px] bg-gray-200 animate-pulse rounded-md " />
            <div className="w-full h-[25px] bg-gray-200 animate-pulse rounded-md " />
          </div>

          }


        </div>

      </div>

      <RandomQuiz />


    </div>
  )
}

export default Feed

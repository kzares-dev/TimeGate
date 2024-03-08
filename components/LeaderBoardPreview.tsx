"use client"
import Image from "next/image"
import Link from "next/link"
import { getLeaderBoard } from "@/lib/actions/user.action";
import { useEffect, useState } from "react";

function LeaderBoardPreview() {

  const [leaderBoard, setLeaderBoard] = useState([]);

  useEffect(() => {
    // getting the 5 first users using a server actions
    getLeaderBoard(1, 5).then((data) => setLeaderBoard(data))
  }, [])




  return (
    <Link href="/leaderboard" className="flex-1 relative flex lg:col-span-2 bg-white h-auto big-border py-5 px-2 pl-5 flex-col cursor-pointer" >
      <div className="text-2xl md:text-4xl font-semibold font-kalam flex items-end  gap-4 border-b pb-4">
        <Image src="/icons/crown.svg" alt="" width={40} height={40} />
        <h1 className=" md:-mb-1">LeaderBoard</h1>
      </div>

      {/** IF the leaderboard is loaded then render a list of users */}
      {leaderBoard[0] ? leaderBoard.map((item: any, index: number) => (
        <div key={item.clerkId} className="flex flex-row py-4 px-2  items-center gap-5 flex-between">

          <div className="flex flex-center gap-4">
            <img src={item.photo} className="w-[40px] h-[40px] object-cover rounded-full" alt="" />

            <div >
              <h1 className="font-mono text-lg text-neutral-600"> @{item.username} </h1>
              <span className="text-neutral-400 flex gap-1 flex-row items-center">
                <Image alt="" src="/icons/coin.svg" width={20} height={20} />
                {item.score || 0}
              </span>
            </div>
          </div>

          <h1 className="subheading"> #{index + 1} </h1>



        </div>
      )) : <div className="w-full flex-start flex gap-4 flex-col pt-5">
      <div className="flex gap-4">
          <div className="bg-gray-200 w-[60px] h-[60px] rounded-full animate-pulse" />

          <span className="flex flex-col gap-2">
            <h1 className="w-[200px] h-[20px] bg-gray-100 animate-pulse rounded-md" />
            <h2 className="w-[100px] h-[20px] bg-gray-100 animate-pulse rounded-md" />
          </span>

        </div>

        <div className="flex gap-4">
          <div className="bg-gray-200 w-[60px] h-[60px] rounded-full animate-pulse" />

          <span className="flex flex-col gap-2">
            <h1 className="w-[200px] h-[20px] bg-gray-100 animate-pulse rounded-md" />
            <h2 className="w-[100px] h-[20px] bg-gray-100 animate-pulse rounded-md" />
          </span>

        </div>

        <div className="flex gap-4">
          <div className="bg-gray-200 w-[60px] h-[60px] rounded-full animate-pulse" />

          <span className="flex flex-col gap-2">
            <h1 className="w-[200px] h-[20px] bg-gray-100 animate-pulse rounded-md" />
            <h2 className="w-[100px] h-[20px] bg-gray-100 animate-pulse rounded-md" />
          </span>

        </div>

        <div className="flex gap-4">
          <div className="bg-gray-200 w-[60px] h-[60px] rounded-full animate-pulse" />

          <span className="flex flex-col gap-2">
            <h1 className="w-[200px] h-[20px] bg-gray-100 animate-pulse rounded-md" />
            <h2 className="w-[100px] h-[20px] bg-gray-100 animate-pulse rounded-md" />
          </span>

        </div>

      </div>}




    </Link>
  )
}

export default LeaderBoardPreview

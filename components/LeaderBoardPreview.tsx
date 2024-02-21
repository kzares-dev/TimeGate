import Image from "next/image"
import Link from "next/link"
import { getLeaderBoard } from "@/lib/actions/user.action";

async function LeaderBoardPreview() {

  // getting the 5 first users using a server actions
  const leaderBoard = await getLeaderBoard(1, 5);

  return (
    <Link href="/leaderboard" className="flex-1 relative flex lg:col-span-2 bg-white h-auto big-border py-5 px-2 pl-5 flex-col cursor-pointer" >
      <div className="text-4xl font-semibold font-kalam flex items-end  gap-4 border-b pb-4">
        <Image src="/icons/crown.svg" alt="" width={40} height={40} />
        <h1 className="-mb-1">LeaderBoard</h1>
      </div>

      {leaderBoard.map((item: any) => (
        <div key={item.clerkId} className="flex flex-row py-4 px-2 gap-4">

          <img src={item.photo} className="w-[50px] h-[50px] object-cover" alt="" />

          <div >
            <h1 className="font-mono text-lg text-neutral-600"> @{item.username} </h1>
            <span className="text-neutral-400 flex gap-1 flex-row items-center">
              <Image alt="" src="/icons/coin.svg" width={20} height={20} />
              {item.score || 0}
            </span>
          </div>

        </div>
      ))}


    </Link>
  )
}

export default LeaderBoardPreview

import Image from "next/image"
import { leaderBoard } from "@/utils/mockData"

function LeaderBoardPreview() {
  return (
    <div className="flex-1 relative flex lg:col-span-2 bg-white h-auto big-border py-5 px-2 pl-5 flex-col" >
      <div className="text-4xl font-semibold font-kalam flex items-end  gap-4 border-b pb-4">
        <Image src="/icons/crown.svg" alt="" width={40} height={40} />
        <h1 className="-mb-1">LeaderBoard</h1>
      </div>

      {leaderBoard.map((item) => (
        <div className="flex flex-row py-4 px-2 gap-4">

          <Image src="/icons/about.svg" height={30} width={30} alt="" />

          <div >
            <h1 className="font-mono text-lg text-neutral-600"> {item.name} </h1>
            <span className="text-neutral-400 flex gap-1 flex-row items-center">
              <Image alt="" src="/icons/coin.svg" width={20} height={20} />
              {item.points}
            </span>
          </div>

        </div>
      ))}


    </div>
  )
}

export default LeaderBoardPreview

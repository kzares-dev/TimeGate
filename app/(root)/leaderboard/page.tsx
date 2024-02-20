"use server"

import { getAllUsers } from "@/lib/actions/user.action"
import Image from "next/image";

async function LeaderBoard() {

    const leaderBoard = await getAllUsers(1, 10);
    return (
        <section className="container mt-[150px] bg-white big-border min-h-[30vh]">

            <h1 className="heading p-4">
                LeaderBoard
            </h1>

            <div className="p-5 grid md:grid-cols-2 gap-5">
                {leaderBoard.map((item: any) => (
                    <div key={item.clerkId} className=" bg-white border shadow">

                        <div className="flex flex-row pb-3 border-b justify-between">

                            <div className="flex flex-center gap-4">

                                <img src={item.photo? item.photo : "https://http.cat/404"} className="w-[60px] h-[60px] rounded-full" />

                                <span className="">
                                    <h1 className="text-[40px] font-kalam text-neutral-800"> {item.fullName} </h1>
                                    <h2 className="font-kalam text-[30px] text-neutral-600"> @{item.username} </h2>
                                </span>

                            </div>


                            <div className="">

                                <span className="flex-row items-center text-[40px] font-bold font-mono  flex gap-4">
                                    #30
                                    <Image alt='' src='/icons/crown.svg' width={40} height={40} />

                                </span>

                                <span className="flex-row items-center text-[25px] font-bold font-mono  flex gap-4">
                                    9308
                                    <Image alt='' src='/icons/coin.svg' width={30} height={30} />
                                </span>

                            </div>


                        </div>

                    </div>
                ))}
            </div>
        </section>
    )
}

export default LeaderBoard

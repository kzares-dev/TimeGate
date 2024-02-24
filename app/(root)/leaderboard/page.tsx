"use server"
import { getLeaderBoard } from "@/lib/actions/user.action"
import Image from "next/image";

async function LeaderBoard() {

    const leaderBoard = await getLeaderBoard(1, 10);
    return (
        <section className="container mt-[150px] bg-white/10 lg:bg-white lg:big-border min-h-[30vh]">

            <h1 className="heading p-4">
                LeaderBoard
            </h1>

            <div className="p-5 grid md:grid-cols-2 gap-5">
                {leaderBoard.map((item: any, index: number) => (
                    <div key={item.clerkId} className=" bg-white border shadow px-3 py-2 rounded-md">

                        <div className="flex flex-row pb-3 border-b justify-between">

                            <div className="flex flex-center gap-4">

                                <img src={item.photo ? item.photo : "https://http.cat/404"} className="w-[60px] h-[60px] rounded-full" />

                                <span className="">
                                    <h2 className="font-kalam text-[30px] text-neutral-600"> @{item.username} </h2>
                                    <h3 className="subheading text-neutral-500"> {item.quizzes} problemas resueltos </h3>
                                </span>

                            </div>


                            <div className="">

                                <span className="flex-row items-center text-[40px] font-bold font-mono  flex gap-4">
                                    #{index + 1}
                                    <Image alt='' src='/icons/crown.svg' width={40} height={40} />

                                </span>

                                <span className="flex-row items-center text-[25px] font-bold font-mono  flex gap-4">
                                    {item.score}
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

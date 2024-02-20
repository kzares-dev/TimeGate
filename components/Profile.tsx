"use client";
import { getUser } from "@/lib/actions/user.action";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useEffect } from "react";

function Profile() {

    const { user } = useUser();

    useEffect(() => {
        if (!user?.id) return
        const userData = getUser(user?.id);

    }, [user])

    if (user) return (
        <div className="flex flex-row pb-3 border-b justify-between">

            <div className="flex flex-center gap-4">

                <img src={user.imageUrl} className="w-[60px] h-[60px] rounded-full" />

                <span className="">
                    <h1 className="text-[40px] font-kalam text-neutral-800"> {user.fullName} </h1>
                    <h2 className="font-kalam text-[30px] text-neutral-600"> @{user.username} </h2>
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
    )
}

export default Profile

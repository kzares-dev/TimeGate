"use client";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";

function Profile() {

    const { user } = useUser();

    if (user) return (
        <div className="flex flex-row pb-3 border-b">

            <div className="flex flex-center gap-4">

                <img src={user.imageUrl} className="w-[60px] h-[60px] rounded-full" />

                <span className="">
                    <h1 className="text-[40px] font-kalam text-neutral-800"> {user.fullName} </h1>
                    <h2 className="font-kalam text-[30px] text-neutral-600"> @{user.username} </h2>
                </span>

            </div>


            <div className="">

                <span>
                    <Image className='absolute top-4 right-4' alt='' src='/icons/crown.svg' width={40} height={40} />
                </span>

                <span>
                    <Image className='absolute top-4 right-4' alt='' src='/icons/coin.svg' width={40} height={40} />
                </span>

            </div>


        </div>
    )
}

export default Profile

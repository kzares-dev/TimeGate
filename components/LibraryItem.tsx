"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

function LibraryItem({ index, title, id }: { index: number, title: string, id: string }) {
    return (
        <Link className="cursor-pointer" href={`/quiz/${id}`} >
            <motion.div

                initial={{ y: "20px", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", delay: index % 3 / 5 + 0.2, duration: 1 }}

                className="flex flex-row  gap-2 border-b lg:border-none"
            >
                {index % 3 === 0 ?
                    <Image src="/icons/check-black.svg" alt="" width={20} height={20} />
                    : <Image src="/icons/check-white.svg" alt="" width={20} height={20} />
                }

                <p className="subheading"> {title} </p>
            </motion.div>
        </Link>
    )
}

export default LibraryItem

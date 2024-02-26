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
                transition={{ type: "spring", delay: index/6 + 0.2, duration: 1 }}

                className="flex flex-row lg:border-none "
            >
                <p className="text-[20px] font-kalam text-neutral-800 lg:underline"> {index + 1}:  {title} </p>
            </motion.div>
        </Link>
    )
}

export default LibraryItem

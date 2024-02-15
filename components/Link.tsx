"use client";
import NextLink from "next/link"
import { useRouter } from "next/navigation";

function Link({ children, href, className }: { children: React.ReactNode, href: string, className?: string }) {
    
    const router = useRouter();
    return (
        <div onClick={() => router.push(`/quiz/${href}/start`)} className={className}>

            {children}

        </div>
    )
}

export default Link

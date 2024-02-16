"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { parseUrlParams } from "@/lib/utils";

function CheckSolution({ params } : any) {

  // initialize the pathname hook
  const pathname = usePathname();

  // check the answers based on the params
  useEffect(() => {
    
    // build the data
    const data = {
      quizId: params.id,
      ...parseUrlParams(params.params),
      userId: "sakcmlk"
    }
    // call the api to validate the answers
    // when is done cancel the loader & display the data 

  }, [])

  return (
    <div>

    </div>
  )
}

export default CheckSolution

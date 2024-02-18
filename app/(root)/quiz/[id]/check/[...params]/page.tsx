"use client";
import { useEffect, useState } from "react";
import { parseUrlParams } from "@/lib/utils";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { verifyAnswers } from "@/lib/actions/quiz.action";

function CheckSolution({ params }: any) {

  const [state, setState] = useState<any>()

  // load clerk user
  const user = useUser();

  // check the answers based on the params
  useEffect(() => {

    if (!user?.user?.id) return

    const urlParams = parseUrlParams(params.params)
    // build the data
    const data = {
      id: params.id,
      time: parseInt(urlParams.time),
      answers: parseInt(urlParams.answers),
      user: user?.user?.id,
    }

    console.log(data)
    // call the api to validate the answers
    // & retrive the data
    verifyAnswers(data)
      .then(data => setState(data))
      .catch(e => console.log(e))
      .finally(() => { })

  }, [user.user?.id])

  return (
    <div className="w-full h-screen flex-center flex-col gap-3">
      <Image src="/loaders/Book.gif" width={70} height={70} alt='' />
      <h1 className="heading text-center"> Revisando sus respuestas </h1>

    </div>
  )
}

export default CheckSolution

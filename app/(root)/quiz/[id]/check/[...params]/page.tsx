"use client";
import { useEffect, useState } from "react";
import { parseUrlParams } from "@/lib/utils";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { verifyAnswers } from "@/lib/actions/quiz.action";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

function CheckSolution({ params }: any) {

  const [state, setState] = useState<any>()
  const [loadingState, setLoadingState] = useState(true)

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
    // call the api to validate the answers
    // & retrive the data
    verifyAnswers(data)
      .then(data => {
        setState(data);
        toast.success("Respuestas revisadas correctamente")
      })
      .catch(e => toast.error("Fallo al revisar las respuestas, pruebe refrescando la pagina"))
      .finally(() => setLoadingState(false))

  }, [user.user?.id])


  if (state) return <div className="container pt-[150px] flex flex-col gap-5">

    {/*-- Header, show the basic data --*/}
    <div className="py-10 min-h-[20vh] bg-white md-border flex-center flex flex-col relative">
      <div className="w-full flex-between px-5">
        <h1 className="heading">Results:</h1>
        <span className="flex flex-row items-center gap-2 heading font-mono">
          +{state.score}
          <Image src="/icons/coin.svg" width={60} height={60} alt='' />
        </span>
      </div>

      <Image src="/icons/trophy.svg" width={100} height={100} alt='' />

      <h2 className="subheading"> {Math.floor(state.score / 10)}/{state.questions} respuestas correctas </h2>

    </div>

    {/*-- Body,show the correct answers --*/}
    <div className="flex flex-row p-3 border-b subheading pl-4">
      <span className="w-2/3">Pregunta & Respuesta Correcta:</span>
      <span className="w-1/3 pl-7">Tu respuesta:</span>
    </div>

    {state.solutionsArray.quizSolutions.map((sol: number, i: number) => {

      const question = state.questionsList[i].quizQuestion;
      const correctSolution = state.questionsList[i].quizOptions[sol - 1]
      const userSolution = state.questionsList[i].quizOptions[state.solutionsArray.userSolutions[i] - 1]

      return <div className="flex flex-col lg:flex-row">

        <div className="mx-4 border px-3 py-1 rounded-md bg-black text-white font-kalam font-bold flex gap-4 flex-center w-10 h-10 my-auto">
          {i + 1}
        </div>

        <div className="text-left w-2/3">
          <h1 className="font-mono text-neutral-700"> {question} </h1>
          <h2 className="font-mono text-2xl font-bold"> {correctSolution} </h2>
        </div>

        <div className={`font-semibold pt-1 w-1/3 pl-4 ${userSolution === correctSolution? "text-green-600" : "text-red-600"}`}>
          {userSolution}
        </div>
      </div>
    })}



  </div>

  // makin an exit if the data is not recived
  return (
    <motion.div
      initial={{ y: "40px", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "twin", duration: 1 }}

      className="w-full h-screen flex-center flex-col gap-3">
      <Image src="/loaders/Book.gif" width={70} height={70} alt='' />
      <h1 className="heading text-center"> Revisando sus respuestas </h1>

    </motion.div>
  )





}

export default CheckSolution

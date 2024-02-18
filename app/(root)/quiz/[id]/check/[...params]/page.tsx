"use client";
import { useEffect, useState } from "react";
import { parseUrlParams } from "@/lib/utils";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { verifyAnswers } from "@/lib/actions/quiz.action";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import CheckedQuiz from "@/components/CheckedQuiz";

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


  if (state) return <CheckedQuiz state={state} />

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

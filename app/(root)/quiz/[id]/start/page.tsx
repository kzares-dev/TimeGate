"use client";
import { getQuizById } from "@/lib/actions/quiz.action";
import { useEffect, useState } from "react";
import Quiz from "@/components/Quiz"

function QuizWatcher({ params }: { params: { id: string } }) {

    // Storing the global state & data for the quiz
    const [state, setState] = useState<any>({
        currentQuestion: 0,
        currentQuiz: {},
    });

    // TODO: implement the correct types for this 
    const [quiz, setQuiz] = useState<any>({

    })

    // Calling the fetch methods to once again get the data 
    // TODO: Make diferences between this fetch & fetching to get description
    useEffect(() => {
        getQuizById(params.id)
            .then((quizData) => {
                setQuiz(quizData);
                setState({...quiz, currentQuiz: quizData.questionsList[0] });
            })

            console.log(quiz)
    }, [])


    // Methods related to pagination & so on
    const nextTab = () => {

    }


    return (
        <></>
    )
}

export default QuizWatcher

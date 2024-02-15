"use client";
import { getQuizById } from "@/lib/actions/quiz.action";
import { useEffect, useRef, useState } from "react";
import Quiz from "@/components/Quiz"
import { formatTime } from "@/lib/utils";

function QuizWatcher({ params }: { params: { id: string } }) {

    // Storing the global state & data for the quiz
    const [quiz, setQuiz] = useState<any>({
        currentQuestion: 1,
        selectedOption: null,
        answers: []
    });


    // TODO: implement the correct types for all this 


    // states all related to current time
    const [currentTime, setCurrentTime] = useState(0);
    const [parsedCurrentTime, setParsedCurrentTime] = useState('');
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const timeRef = useRef<number>(0);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            timeRef.current += 1;
            setCurrentTime(timeRef.current);
        }, 1000);

        return () => {
            clearInterval(intervalRef.current as NodeJS.Timeout);
        };
    }, []); // Runs only once on component mount

    useEffect(() => {
        setParsedCurrentTime(formatTime(currentTime));
    }, [currentTime]); // Runs when currentTime changes
    

    // Calling the fetch methods to once again get the data 
    // TODO: Make diferences between this fetch & fetching to get description
    useEffect(() => {

        getQuizById(params.id)
            .then((quizData) => {
                setQuiz({ ...quiz, ...quizData });
            })


    }, [])




    // Methods related to pagination & select option for any question
    const nextTab = () => {

        setQuiz((prevState: any) => {
            return {
                ...prevState,
                currentQuestion: quiz.currentQuestion + 1,
                answers: [...quiz.answers, quiz.selectedOption],
                selectedOption: null,
            }
        });


        if (quiz.currentQuestion === quiz.totalQuestions) {
            alert("quizended")
        }
    }

    const clickOnOption = (i: number) => {
        setQuiz({ ...quiz, selectedOption: i })
    }
    // console.log(quiz.questionsList[quiz.currentQuestion])

    if (quiz.title) {
        return (
            <Quiz
                // general data
                quizTitle={quiz.title}
                currentQuestion={quiz.currentQuestion}
                currentTime={parsedCurrentTime}
                totalQuestions={quiz.questions}

                // specific data for any quiz
                quizQuestion={quiz.questionsList[quiz.currentQuestion - 1].quizQuestion}
                quizOptions={quiz.questionsList[quiz.currentQuestion - 1].quizOptions}
                selectedOption={quiz.selectedOption}

                // helper function
                nextTab={nextTab}
                clickOnOption={(i: number) => clickOnOption(i)}
            />

        )
    }
}

export default QuizWatcher

"use client";
import { getQuizDescription } from "@/lib/actions/quiz.action";
import { useEffect, useRef, useState } from "react";
import Quiz from "@/components/Quiz"
import { formatTime, transformIntoNumber } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useUser } from "@clerk/nextjs";
import { getRecord } from "@/lib/actions/record.action";
import Image from "next/image";
import { motion } from "framer-motion"

function QuizWatcher({ params }: { params: { id: string } }) {

    // loading the id of the user to check if he alredy complete this quiz
    const user = useUser();

    // setting up router to redirect when the user ends the quiz
    const router = useRouter();

    // Storing the global state & data for the quiz
    const [quiz, setQuiz] = useState<any>({
        currentQuestion: 1,
        selectedOption: null,
        answers: []
    });

    // states all related to current time
    const [currentTime, setCurrentTime] = useState(0);
    const [parsedCurrentTime, setParsedCurrentTime] = useState('');
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const timeRef = useRef<number>(0);

    useEffect(() => {
        if (!quiz?.title) return

        intervalRef.current = setInterval(() => {
            timeRef.current += 1;
            setCurrentTime(timeRef.current);
        }, 1000);

        return () => {
            clearInterval(intervalRef.current as NodeJS.Timeout);
        };
    }, [quiz.title]); // Runs only once on component mount

    useEffect(() => {
        setParsedCurrentTime(formatTime(currentTime));
    }, [currentTime]); // Runs when currentTime changes

    // Calling the fetch methods to once again get the data 
    useEffect(() => {

        if (!user.user?.id) return

        // check if the user alredy complete this quiz
        getRecord(user?.user?.id.toString() || "", params.id)
            .then((data) => {

                if (!data) {
                    getQuizDescription(params.id)
                        .then((quizData) => {
                            setQuiz({ ...quiz, ...quizData });
                        })
                } else {
                    return router.replace(`/results/user=${user?.user?.id || ""}&quiz=${params.id}`)
                }
            })


    }, [user?.user?.id])

    // scroll to top funcionality 
    const scrollToTop = () => {
        const scrollStep = window.scrollY / 20;

        const scrollAnimation = () => {
            if (window.scrollY !== 0) {
                window.scrollTo(0, window.scrollY - scrollStep);
                window.requestAnimationFrame(scrollAnimation);
            }
        };

        window.requestAnimationFrame(scrollAnimation);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight) {
                // Show button to scroll to top
            } else {
                // Hide button
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    // Methods related to pagination & select option for any question
    const nextTab = () => {
        if (!quiz.selectedOption) {
            // Send an error message if the user has not selected an option
            return toast.error("You must select an option");
        }

        // Update the quiz answers with the selected option
        const updatedAnswers = [...quiz.answers, quiz.selectedOption];
        setQuiz({ ...quiz, answers: updatedAnswers });

        if (quiz.currentQuestion === quiz.questions) {
            // Redirect to the verification page to check the results
            const url = `/quiz/${params.id}/check/title=${quiz.title}&time=${currentTime}&answers=${transformIntoNumber(updatedAnswers)}`;

            toast.success("Your answers have been sent for review");
            router.push(url);
        } else {
            scrollToTop()
            // Update the quiz state to move to the next question
            setQuiz((prevState: any) => ({
                ...prevState,
                currentQuestion: quiz.currentQuestion + 1,
                selectedOption: null,
            }));
        }

        // Log the updated answers and their transformation for debugging
        console.log(updatedAnswers);
        console.log(transformIntoNumber(updatedAnswers));
    };
    const clickOnOption = (i: number) => {
        setQuiz((prevState: any) => {
            return { ...prevState, selectedOption: i }
        })
    }

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

    // makin an exit if the data is not recived
    return (
        <motion.div
            initial={{ y: "40px", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "twin", duration: 1 }}

            className="w-full h-screen flex-center flex-col gap-3">
            <Image src="/loaders/Book.gif" width={70} height={70} alt='' />
            <h1 className="heading text-center"> Cargando datos necesarios </h1>

        </motion.div>
    )
}

export default QuizWatcher

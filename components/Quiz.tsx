import QuizChoice from "@/components/QuizChoice"
import Image from "next/image"

// Props to ts
interface QuizProps {
    quizTitle: string,
    quizQuestion: string,
    currentTime: string,
    currentQuestion: number,
    totalQuestions: number,
    quizOptions: string[],
    selectedOption?: number,
    clickOnOption: (i: number) => void,
    nextTab: () => void,
}

function Quiz({
    quizTitle,
    quizQuestion,
    currentQuestion,
    currentTime,
    totalQuestions,
    quizOptions,
    selectedOption,
    clickOnOption,
    nextTab,
}: QuizProps) {


    return (
        <div className="lg:container pt-[150px] lg:pt-0 lg:flex-center h-screen">


            <div className="min-h-[40vh] w-full flex flex-col gap-5 lg:w-[90%] lg:mx-2">

                {/*-- Quiz Header --*/}
                <div className="flex flex-between lg:px-10 w-full">
                    <h2 className="mr-2 text-[20px] md:text-[35px] lg:text-[60px] font-kalam font-bold tracking-tight"> {quizTitle} </h2>

                    <div className="bg-gray-50 flex flex-row gap-5  h-[50px] relative ">



                    </div>
                </div>

                {/*-- Quiz Body --*/}
                <div className="flex flex-col bg-white-30 lg:bg-white/50 w-full py-10 border  shadow px-3 gap-5 pt-10">

                    {/*-- About topic & answers check --*/}
                    <div className="flex-between flex-between pb-4 border-b lg:px-10 gap-4">

                        <div className="flex flex-col lg:flex-row gap-3 ">
                            <span className="">
                                <Image src="/icons/time-travel.png" width={60} height={50} alt='' />
                            </span>
                            <div className="">
                                <h2 className="mr-2 text-[30px] font-kalam font-thin tracking-tight"> {quizQuestion} </h2>
                                <span className="px-1 text-neutral-600"> {currentTime} </span>
                            </div>
                        </div>

                        <div className="text-4xl font-bold font-mono">
                            {currentQuestion}/{totalQuestions}
                        </div>

                    </div>

                    {/*-- Choices --*/}
                    <div className="flex flex-col gap-5">
                        {quizOptions.map((choice, index) => (
                            <QuizChoice
                                key={index}
                                choice={choice}
                                clickOnOption={(i: number) => clickOnOption(i + 1)}
                                isActive={selectedOption === index + 1}
                                index={index}
                            />
                        ))}
                    </div>

                    {/*-- Confirm Btn --*/}
                    <button onClick={nextTab} className="button py-4 mt-3">Continuar</button>

                </div>


            </div>


        </div>
    )
}

export default Quiz

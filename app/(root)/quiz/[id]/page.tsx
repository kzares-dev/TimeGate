"use server";
import Image from "next/image"
import Link from "@/components/Link"
import { getQuizById } from "@/lib/actions/quiz.action"
import RandomQuiz from "@/components/RandomQuiz";

// this is for the intro of the quiz
// to select another & so
async function QuizWrapper({ params }: { params: { id: string } }) {

    // loading the params  & making a server request to fetch data
    const quiz = await getQuizById(params.id)

    return (
        <div className="lg:container pt-[150px] lg:pt-0 lg:flex-center h-screen gap-5 flex-col">


            <div className="min-h-[40vh] w-full flex flex-col gap-5 lg:w-[90%] md:mx-2 px-1">

                {/*-- Header --*/}
                <div className="flex flex-between lg:px-10 w-full">
                    <h2 className="mr-2 text-[30px] lg:text-[60px] font-kalam font-bold tracking-tight">Desafio preparado </h2>


                    <Image alt="" width={80} height={40} src="/icons/quiz.svg" />
                </div>

                {/*-- Body --*/}
                <div className="flex flex-col bg-white/30 w-full py-10 border  shadow px-3 gap-5 pt-10">

                    {/*-- About quiz --*/}
                    <div className=" flex-col lg:flex-between  pb-4 border-b lg:px-10">

                        <div className="flex flex-row gap-3 ">

                            <div className="flex-center hidden md:flex">
                                <Image src="/icons/play.png" width={80} height={30} alt='' />
                            </div>

                            <div className="">
                                <h2 className="mr-2 text-[20px] md:text-[30px] font-kalam font-thin tracking-tight"> {quiz.title} </h2>
                                <span className="px-1 text-neutral-600 font-mono underline"> {quiz.category} </span>
                                <p className="text-[17px] md:text-lg text-neutral-600 pt-3 font-kalam"> {quiz.description} </p>

                            </div>

                        </div>

                        <div className=" text-3xl md:text-4xl font-bold font-mono mt-2">
                            {quiz.questions} preguntas
                        </div>

                    </div>


                    <div className="flex flex-col-reverse lg:flex-col">
                        {/*-- Library Buttons --*/}
                        <div className="flex-center flex-col lg:flex-row gap-5 pt-10">
                            <Link href="/library" className='cursor-pointer flex-1 flex flex-col  shadow-sm md-border  px-5 py-5 gap-2 relative' >

                                <h1 className='text-2xl md:text-4xl font-kalam font-semibold'>Libreria de Historia</h1>
                                <p className='text-[17px] md:text-lg font-mono leading-tight'>Selecciona un desafio sobre tu epoca favorita</p>
                                <Image className='absolute top-4 right-4' alt='' src='/icons/library.svg' width={40} height={40} />

                            </Link>

                            <RandomQuiz />
                        </div>

                        {/*-- Confirm Btn --*/}
                        <a href={`/quiz/${params.id}/start`}>
                            <button className="button py-4 mt-3 w-full">Comenzemos</button>
                        </a>
                    </div>
                </div>


            </div>




        </div>
    )
}

export default QuizWrapper

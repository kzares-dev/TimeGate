"use server";
import Image from "next/image"
import Link from "@/components/Link"
import { getQuizById } from "@/lib/actions/quiz.action"


// this is for the intro of the quiz
// to select another & so

async function QuizWrapper({ params }: { params: string }) {

    // loading the params  & making a server request to fetch data
    const quiz = await getQuizById(params)



    return (
        <div className="container flex-center h-screen gap-5 flex-col">


            <div className="min-h-[40vh] w-full flex flex-col gap-5 lg:w-[90%] mx-2">

                {/*-- Header --*/}
                <div className="flex flex-between px-10 w-full">
                    <h2 className="mr-2 text-[60px] font-kalam font-bold tracking-tight">Desafio preparado </h2>


                    <Image alt="" width={80} height={40} src="/icons/quiz.svg" />
                </div>

                {/*-- Body --*/}
                <div className="flex flex-col bg-white w-full py-10 border  shadow px-3 gap-5 pt-10">

                    {/*-- About quiz --*/}
                    <div className="flex-between flex-between pb-4 border-b px-10">

                        <div className="flex flex-row gap-3 ">

                            <div className="flex-center">
                                <Image src="/icons/play.png" width={80} height={30} alt='' />
                            </div>

                            <div className="">
                                <h2 className="mr-2 text-[30px] font-kalam font-thin tracking-tight"> This is the title of the quiz </h2>
                                <span className="px-1 text-neutral-600 font-mono underline">mesopotamic era</span>
                                <p className="text-lg text-neutral-600 pt-3 font-kalam">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim id minus molestiae eum earum incidunt nemo beatae magnam quae obcaecati.</p>

                            </div>

                        </div>

                        <div className="text-4xl font-bold font-mono">
                            0/10
                        </div>

                    </div>


                    {/*-- Library Buttons --*/}
                    <div className="flex-center flex-col lg:flex-row gap-5 pt-10">
                        <Link href="/library" className='cursor-pointer flex-1 flex flex-col  shadow-sm md-border  px-5 py-5 gap-2 relative' >

                            <h1 className='text-4xl font-kalam font-semibold'>Libreria de Historia</h1>
                            <p className='text-lg font-mono leading-tight'>Selecciona un desafio sobre tu epoca favorita</p>
                            <Image className='absolute top-4 right-4' alt='' src='/icons/library.svg' width={40} height={40} />

                        </Link>

                        <div className='flex-1 flex flex-col shadow-sm md-border  px-5 py-5 gap-2 relative' >

                            <h1 className='text-4xl font-kalam font-semibold'>Sorprendeme!</h1>
                            <p className='text-lg font-mono leading-tight'>Que tal intentar con un desafio aleatorio</p>
                            <Image className='absolute top-4 right-4' alt='' src='/icons/random.png' width={40} height={40} />

                        </div>
                    </div>

                    {/*-- Confirm Btn --*/}
                    <Link className="w-full" href={params}>
                        <button className="button py-4 mt-3 w-full">Comenzemos</button>
                    </Link>

                </div>


            </div>




        </div>
    )
}

export default QuizWrapper

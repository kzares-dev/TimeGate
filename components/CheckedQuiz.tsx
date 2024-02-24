import Image from "next/image";
import RandomQuiz from "./RandomQuiz";
import Link from "next/link";

function CheckedQuiz({ state }: { state: any }) {

    return (
        <div className="container pt-[150px] flex flex-col gap-5">

            {/*-- Header, show the basic data --*/}
            <div className="py-10 min-h-[20vh] bg-white/30 md-border flex-center flex flex-col relative">
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

                return <div className="flex flex-row">

                    <div className="mx-4 border px-3 py-1 rounded-md bg-black text-white font-kalam font-bold flex gap-4 flex-center w-10 h-10 my-auto">
                        {i + 1}
                    </div>

                    <div className="text-left w-2/3">
                        <h1 className="font-mono text-neutral-700"> {question} </h1>
                        <h2 className="font-mono text-2xl font-bold"> {correctSolution} </h2>
                    </div>

                    <div className={`font-semibold pt-1 w-1/3 pl-4 ${userSolution === correctSolution ? "text-green-600" : "text-red-600"}`}>
                        {userSolution}
                    </div>
                </div>
            })}



            <div className="grid gap-4 mt-4 md:grid-cols-2 pb-10 lg:pb-1">

                <Link href="/home">
                    <div className='flex-1 flex flex-col bg-gray-50/10 shadow-sm md-border cursor-pointer px-5 py-5 gap-2 relative' >

                        <h1 className='text-4xl font-kalam font-semibold'>Volver a Inicio</h1>
                        <p className='text-lg font-mono leading-tight'>Haz realizado un buen trabajo, sigue resolviendo problemas para ganar puntos y aspirar a ser el mejor</p>
                        <Image className='absolute top-4 right-4' alt='' src='/icons/home.svg' width={40} height={40} />

                    </div>
                </Link>

                <RandomQuiz />

            </div>

        </div>
    )
}

export default CheckedQuiz

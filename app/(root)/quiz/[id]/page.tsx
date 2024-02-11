import QuizChoice from "@/components/QuizChoice"
import Image from "next/image"

const choices = [1, 2, 3, 4]

function Quiz() {
    return (
        <div className="container flex-center h-screen">


            <div className="min-h-[40vh] w-full flex flex-col gap-5 lg:w-[90%] mx-2">

                {/*-- Quiz Header --*/}
                <div className="flex flex-between px-10 w-full">
                    <h2 className="mr-2 text-[60px] font-kalam font-bold tracking-tight">Mesopotamic Era</h2>

                    <div className="bg-gray-50 flex flex-row gap-5  h-[50px] relative">
                        
                        <div className="flex flex-row">
                            <Image alt="" width={50} height={40} src="/icons/success.png"  />
                            <p className="font-mono text-[40px] font-bold">2</p>
                        </div>

                        <div className="flex flex-row">
                            <Image alt="" width={50} height={40} src="/icons/cancel.png"  />
                            <p className="font-mono text-[40px] font-bold">2</p>
                        </div>

                    </div>
                </div>

                {/*-- Quiz Body --*/}
                <div className="flex flex-col bg-white w-full py-10 border  shadow px-3 gap-5 pt-10">

                    {/*-- About topic & answers check --*/}
                    <div className="flex-between flex-between pb-4 border-b px-10">

                        <div className="flex flex-row gap-3 ">
                            <Image src="/icons/time-travel.png" width={60} height={50} alt='' />
                            <div className="">
                                <h2 className="mr-2 text-[30px] font-kalam font-thin tracking-tight"> What is the average lifespan of a Great Dane? </h2>
                                <span className="px-1 text-neutral-600">22m 20s</span>
                            </div>
                        </div>

                        <div className="text-4xl font-bold font-mono">
                            5/10
                        </div>

                    </div>

                    {/*-- Choices --*/}
                    <div className="flex flex-col gap-5">
                        {choices.map((choice, index) => (
                            <QuizChoice index={index} />
                        ))}
                    </div>

                    {/*-- Confirm Btn --*/}
                    <button className="button py-4 mt-3">Continue</button>

                </div>


            </div>


        </div>
    )
}

export default Quiz

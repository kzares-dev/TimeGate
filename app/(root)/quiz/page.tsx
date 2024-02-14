import Image from "next/image"
import Link from "next/link"

async function QuizHome(){


    return (
        <main className="relative container mt-[100px] lg:mt-0 lg:flex-center min-h-[100vh]">

            <div className="lg:-mt-[10vh] flex flex-col gap-4">

                <div className="flex flex-between px-10 w-full pt-10 border-b">

                    <h2 className="flex flex-col lg:flex-row mr-2 text-[70px] font-kalam font-bold tracking-tight gap-2">
                        <Image alt='' src='/icons/track.png' width={100} height={40} objectFit="contain" />
                        Desafio Preparado</h2>
                </div>

                <div className="pt-10 pb-5 bg-white big-border shadow-lg flex flex-col lg:flex-row ">

                    <div className="px-4 pt-5 pb-3">
                        <h2 className="text-[25px] font-kalam text-neutral-700 flex flex-row gap-2 items-center font-thin">
                            <Image alt='' src='/icons/clock.png' width={25} height={25} />
                            mesopotamic era</h2>

                        <h1 className="text-[50px] font-mono font-semibold">Quiz Name</h1>

                        <p className="text-[20px] text-neutral-600" > Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem facilis aperiam hic alias, velit animi asperiores provident laboriosam eum minima aspernatur modi dolore rerum accusamus temporibus voluptatem beatae ipsa impedit. </p>

                    </div>

                    <div className=" h-auto flex items-end">

                        <button className="button flex-center items-center gap-4 text-[25px]">
                            <Image alt='' src='/icons/play.png' width={60} height={60} objectFit="contain" />
                            Empecemos
                        </button>
                    </div>

                </div>
                <div className="grid gap-4 mt-4 md:grid-cols-2 pb-10 lg:pb-1">

                    <Link href="/library" className='cursor-pointer flex-1 flex flex-col bg-gray-50 shadow-sm md-border  px-5 py-5 gap-2 relative' >

                        <h1 className='text-4xl font-kalam font-semibold'>Libreria de Historia</h1>
                        <p className='text-lg font-mono leading-tight'>Selecciona un desafio sobre tu epoca favorita</p>
                        <Image className='absolute top-4 right-4' alt='' src='/icons/library.svg' width={40} height={40} />

                    </Link>

                    <div className='flex-1 flex flex-col bg-gray-50 shadow-sm md-border  px-5 py-5 gap-2 relative' >

                        <h1 className='text-4xl font-kalam font-semibold'>Sorprendeme!</h1>
                        <p className='text-lg font-mono leading-tight'>Que tal intentar con un desafio aleatorio</p>
                        <Image className='absolute top-4 right-4' alt='' src='/icons/random.png' width={40} height={40} />

                    </div>

                </div>

            </div>



        </main>
    )
}

export default QuizHome

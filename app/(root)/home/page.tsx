"use client"
import LeaderBoardPreview from '@/components/LeaderBoardPreview'
import Feed from '@/components/Feed';
import Image from 'next/image'
import Link from "next/link"

function Home() {

  return (
    <main className="p-8 mx-auto container pt-[100px]">
      <div className="flex items-center">
        <h2 className="mr-2 text-[90px] font-kalam font-bold tracking-tight">Dashboard</h2>
      </div>

      <div className="grid gap-4 mt-4 md:grid-cols-2 pb-10 lg:pb-1">

        <Link href="/library">
          <div className='flex-1 flex flex-col bg-gray-50/10 shadow-sm md-border cursor-pointer px-5 py-5 gap-2 relative' >

            <h1 className='text-4xl font-kalam font-semibold'>Libreria de Historia</h1>
            <p className='text-lg font-mono leading-tight'>Busca entre nuestra coleccion de puzles, nuevos desafios de todos los temas listos para ser explorados</p>
            <Image className='absolute top-4 right-4' alt='' src='/icons/library.svg' width={40} height={40} />

          </div>
        </Link>

        <div className='flex-1 flex flex-col bg-gray-50/10 shadow-sm md-border  px-5 py-5 gap-2 relative' >

          <h1 className='text-4xl font-kalam font-semibold'> Acerca del juego </h1>
          <p className='text-lg font-mono leading-tight'>Te quedan dudas acerca de lo que trata la plataforma?</p>
          <Image className='absolute top-4 right-4' alt='' src='/icons/about.svg' width={40} height={40} />

        </div>

      </div>
      <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-7">
        <Feed />
        <LeaderBoardPreview />
      </div>
    </main>
  )
}

export default Home

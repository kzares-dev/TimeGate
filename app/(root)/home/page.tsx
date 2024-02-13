
import LeaderBoardPreview from '@/components/LeaderBoardPreview'
import Popular from '@/components/Popular'
import Image from 'next/image'
import React from 'react'

function Home() {
  return (
    <main className="p-8 mx-auto container pt-[100px]">
      <div className="flex items-center">
        <h2 className="mr-2 text-[90px] font-kalam font-bold tracking-tight">Dashboard</h2>
        <button className='big-border text-[20px] px-5' > Details </button>
      </div>

      <div className="grid gap-4 mt-4 md:grid-cols-2 pb-10 lg:pb-1">

        <div className='flex-1 flex flex-col bg-gray-50 shadow-sm md-border  px-5 py-5 gap-2 relative' >

          <h1 className='text-4xl font-kalam font-semibold'>History Library</h1>
          <p className='text-lg font-mono leading-tight'>Here you can review the history you have so far, and learn about what is left for you to discover.</p>
          <Image className='absolute top-4 right-4' alt='' src='/icons/library.svg' width={40} height={40} />

        </div>

        <div className='flex-1 flex flex-col bg-gray-50 shadow-sm md-border  px-5 py-5 gap-2 relative' >

          <h1 className='text-4xl font-kalam font-semibold'>About Game</h1>
          <p className='text-lg font-mono leading-tight'>Do you not know what the game is about? You can find guidance here.</p>
          <Image className='absolute top-4 right-4' alt='' src='/icons/about.svg' width={40} height={40} />

        </div>

      </div>
      <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-7">
        <Popular />
        <LeaderBoardPreview />
      </div>
    </main>
  )
}

export default Home

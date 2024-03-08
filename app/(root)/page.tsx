"use client"
import SandClock from '@/components/SandClock'
import Image from 'next/image'
import Link from 'next/link'
import { motion, spring } from 'framer-motion'

function Home() {
  return (
    <section className='pt-[100px] lg:pt-5 w-full min-h-screen  gap-[80px] container  flex flex-col-reverse lg:items-center lg:justify-start lg:flex-row lg:flex-center px-1' >


      <div className='gradient-01' />
      <div className='gradient-02' />

      <div className="flex flex-1 flex-col gap-10 lg:gap-3">

        {/*-- Content Part --*/}  
        <div className="flex min-h-[20vh] items-center  my-5  gap-5 md:flex-row flex-col">
          <motion.div
            initial={{ x: "-40px", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", delay: 0.7, duration: 1 }}

            className="w-[120px]">
            <Image src="/icons/portal.png" width={120} height={120} alt='' className='hidden lg:block w-full' />
          </motion.div>

          <div className="">

            <motion.h1
              initial={{ y: "40px", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", delay: 0, duration: 1 }}

              className='text-[60px] lg:text-[80px] font-mono font-bold leading-[80px] pb-5' >
              Atemporal
            </motion.h1>

            <motion.p
              initial={{ y: "40px", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", delay: .3, duration: 1 }}

              className="max-w-[800px] font-mono text-neutral-600">
              Descubre el pasado y haz historia en nuestro Festival Atemporal. ¡Conviértete en el campeón del conocimiento histórico!</motion.p>

            <Link href="/home">
              <motion.div
                initial={{ y: "40px", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", delay: .5, duration: 1 }}

                className="mt-5 button w-[180px] text-left z-10 relative" >
                Empezemos
              </motion.div>
            </Link>

          </div>



        </div>

        {/*-- About Part --*/}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "spring", delay: 2, duration: 1 }}

          className='flex w-full h-auto shadow-sm py-3 px-1 md:px-4 flex-col gap-4 big-border pb-5'>

          <motion.div
            initial={{ x: "40px", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", delay: 2, duration: 1 }}

            className=" flex flex-col xl:flex-row ml-4 md:px-4 py-5 border gap-4">
            <div className="">
              <Image src="/icons/network.png" alt='' width={80} height={80} />
            </div>
            <h2 className='max-w-[400px] text-xl font-semibold font-mono' >Conecta con amantes de los puzles y disfruta resolviendo desafíos juntos en nuestra plataforma. ¡Únete a una comunidad de entusiastas!</h2>

          </motion.div>

          <motion.div
            initial={{ x: "-n40px", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", delay: 2, duration: 1 }}
            className=" flex flex-col xl:flex-row ml-4 md:px-4 py-5 border gap-4 flex-end items-end">


            <h2 className='max-w-[400px] text-xl font-semibold font-mono' >Únete a la tendencia de los festivales y participa en emocionantes eventos con nosotros.</h2>
            <div className="">
              <Image src="/icons/trending.png" alt='' width={80} height={80} />
            </div>

          </motion.div>



        </motion.div>


      </div>

      <SandClock />


    </section>
  )
}

export default Home

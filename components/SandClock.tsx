import Image from "next/image";
import { motion } from "framer-motion";

function SandClock() {
    return (
        <div className="flex-1 flex flex-center w-full relative -mb-10 lg:opacity-100 -z-[1] ">

            {/*-- Top Notepad --*/}
            <motion.div
                initial={{ x: "-40px", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", delay: 1, duration: 1 }}

                className="hidden lg:block absolute top-0 left-0 w-full h-full max-w-[300px] max-h-[150px] rounded-md shadow-lg big-border font-kalam opacity-90 ">
                <h1>Explora desafíos contemporáneos, colabora con compañeros en tiempo real y crea un futuro lleno de victorias hoy mismo</h1>


            </motion.div>

            {/*-- Middle Notepad --*/}
            <motion.div
                initial={{ x: "40px", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", delay: 1.2, duration: 1 }}

                className="bg-white absolute top-1/2 right-0 w-full h-full max-w-[300px] max-h-[150px] rounded-md shadow-lg big-border font-kalam opacity-90">
                <h1>Descubre los enigmas olvidados, teje alianzas en un mundo ancestral y forja un futuro desde los cimientos del ayer.</h1>




            </motion.div>

            {/*-- Bottom Notepad --*/}
            <motion.div
                initial={{ y: "-40px", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", delay: 1.4, duration: 1 }}

                className="hidden lg:block absolute bottom-3 right-3 left-0 w-full h-full max-w-[300px] max-h-[150px] rounded-md shadow-lg big-border font-kalam opacity-80 md:opacity-90">
                <h1>Desafía los rompecabezas del mañana, sincroniza esfuerzos en un mundo por venir y construye un futuro brillante a través de la cooperación eterna.</h1>



            </motion.div>



            <motion.div
                initial={{ scale: .9 ,opacity: 0 }}
                animate={{ scale:1 ,opacity: 1 }}
                transition={{ type: "spring", delay: 0, duration: 1}}

                className="w-full">
                <Image src="/images/cover.jpg" width={600} height={600} objectFit='cover' alt='' className='w-full opacity-100' />
            </motion.div>
        </div>
    )
}

export default SandClock

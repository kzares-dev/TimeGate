import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import Image from "next/image"


function AboutDialog() {
    return (


        <AlertDialog>

            <AlertDialogTrigger className="cursor-pointer flex-1 flex flex-col bg-gray-50/10 shadow-sm md-border  px-5 py-5 gap-2 relative">

                <h1 className='text-2xl md:text-4xl font-kalam font-semibold'> Acerca del juego </h1>
                <p className='text-[15px] md:text-lg font-mono leading-tight'>Te quedan dudas acerca de lo que trata la plataforma?</p>
                <Image className='absolute top-4 right-4' alt='' src='/icons/about.svg' width={40} height={40} />

            </AlertDialogTrigger>

            <AlertDialogContent>

                <AlertDialogHeader>
                    <AlertDialogTitle>Nesesitas detalles?</AlertDialogTitle>
                    <AlertDialogDescription>
                        ¡Explora nuestro adictivo juego de quizes de historia creado por la facultad de Matemáticas, Física y Computación! Desafía tu mente, acumula puntos con cada respuesta correcta y rapidez, y demuestra tus conocimientos históricos en una experiencia educativa y entretenida diseñada por expertos académicos. ¿Estás listo para participar en este emocionante desafío educativo?
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                    <AlertDialogAction>Entendido</AlertDialogAction>
                </AlertDialogFooter>


            </AlertDialogContent>

        </AlertDialog>
    )
}

export default AboutDialog

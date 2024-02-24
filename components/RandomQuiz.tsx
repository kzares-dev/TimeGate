"use client"
import { getRandomQuizId } from '@/lib/actions/quiz.action';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

function RandomQuiz() {
    const router = useRouter()
    const [randomId, setRandomId] = useState<string>()

    const getRandomId = async () => {
        const data = await getRandomQuizId();
        setRandomId(data)

        return data
    }

    // try to get the random id & store in a variable
    useEffect(() => {
        getRandomId()
    }, [])

    // if the id is not fetch we await for it
    const awaitRandomId = () => {
        toast.success("cargando quiz aleatorio")

        getRandomId()
            .then((data) => router.push(`/quiz/${data}`) )
            .catch(() => toast.error("Fallo al cargar el quiz"))
    }

    // verify if the random id is loaded, so, a <a> tag can be rendered
    if (randomId) return <a href={`/quiz/${randomId}`} className='cursor-pointer flex-1 flex flex-col shadow-sm md-border  px-5 py-5 gap-2 relative' >
        <h1 className='text-4xl font-kalam font-semibold'>Sorprendeme!</h1>
        <p className='text-lg font-mono leading-tight'>Que tal intentar con un desafio aleatorio</p>
        <Image className='absolute top-4 right-4' alt='' src='/icons/random.png' width={40} height={40} />

    </a>

    return (
        <div onClick={awaitRandomId} className='cursor-pointer flex-1 flex flex-col shadow-sm md-border  px-5 py-5 gap-2 relative' >
            <h1 className='text-4xl font-kalam font-semibold'>Sorprendeme!</h1>
            <p className='text-lg font-mono leading-tight'>Que tal intentar con un desafio aleatorio</p>
            <Image className='absolute top-4 right-4' alt='' src='/icons/random.png' width={40} height={40} />

        </div>
    )
}

export default RandomQuiz

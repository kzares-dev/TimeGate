import LibraryItem from "@/components/LibraryItem";
import { getLibrary } from "@/lib/actions/quiz.action"
import Image from "next/image"


interface LibraryItem {
  title: string,
  _id: string,
}


async function Library() {

  // Fetch the library data with a server action 

  const library = await getLibrary() || ""

  // exiting if the library is not loaded
  if (typeof (library) === 'string') return (
    <main className="container pt-[150px] h-[100vh] w-full p-5 flex-center" >

      <h1 className="heading">No se pudo cargar la libreria correctamente</h1>

    </main >
  )


  return (
    <main className="container pt-[150px] h-screen w-full p-5 " >

      <div className="w-full  bg-white/10 min-h-[200px] lg:big-border px-3 py-5 pt-10">


        <span className=" w-full flex-center flex-col mt-5">
          <Image src="/icons/explore.svg" alt="" width={100} height={100} />
          <h1 className="heading">Explora & Descubre</h1>
        </span>

        <div className="grid gap-10 lg:bg-gray-50/50 border rounded-md lg:jshadow p-1 lg:p-5 lg:m-4 lg:grid-cols-2 pt-5 lg:pt-10">
          {library.map(({ title, _id }: LibraryItem, index) => (
            <LibraryItem
              key={_id}
              index={index}
              title={title}
              id={_id}
            />
          ))}

        </div>

      </div>



    </main>
  )
}

export default Library

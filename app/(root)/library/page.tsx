import LibraryItem from "@/components/LibraryItem";
import { getLibrary } from "@/lib/actions/quiz.action"
import Image from "next/image"


interface LibraryItem {
  title: string,
  _id: string,
}

// this is a not found item
const notFound = {
  _id: "not found",
  title: "No se pudo cargar correctamente la libreria",
}

async function Library() {

  // Fetch the library data with a server action 

  const library = await getLibrary() || [notFound];
  return (
    <main className="container pt-[150px] h-screen w-full p-5 " >

      <div className="w-full  bg-white/10 min-h-[200px] lg:big-border px-3 py-5 pt-10">


        <span className=" w-full flex-center flex-col">
          <Image src="/icons/explore.svg" alt="" width={100} height={100} />
          <h1 className="heading">Explora & Descubre</h1>
        </span>

        <div className="grid gap-2 bg-gray-50/50 border rounded-md shadow p-1 lg:p-5 lg:m-4 lg:grid-cols-2 pt-3 lg:pt-10">
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

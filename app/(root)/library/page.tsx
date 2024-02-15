import LibraryItem from "@/components/LibraryItem";
import { getLibrary } from "@/lib/actions/quiz.action"
import Image from "next/image"


interface LibraryItem {
  title: string,
  id: string,
}

async function Library() {

  // Fetch the library data with a server action 
  // TODO: This temporarly return a mock data

  const library = await getLibrary() || [];

  return (
    <main className="container pt-[150px] h-screen w-full " >

      <div className="w-full  bg-white min-h-[200px] big-border px-3 py-5 pt-10">


        <span className=" w-full flex-center flex-col">
          <Image src="/icons/explore.svg" alt="" width={100} height={100} />
          <h1 className="heading">Explora & Descubre</h1>
        </span>

        <div className="grid gap-2 bg-gray-50/50 border rounded-md shadow p-5 m-4 lg:grid-cols-2 pt-10">
          {library.map(({ title, id }: LibraryItem, index) => (
            <LibraryItem
              key={id}
              index={index}
              title={title}
              id={id}
            />
          ))}

        </div>

      </div>



    </main>
  )
}

export default Library

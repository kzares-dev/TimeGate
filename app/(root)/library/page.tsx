import Image from "next/image"

const categories = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9]

function Library() {

  return (
    <main className="container pt-[150px] h-screen w-full " >

      <div className="w-full  bg-white min-h-[200px] big-border px-3 py-5 pt-10">


        <span className=" w-full flex-center flex-col">
          <Image src="/icons/explore.svg" alt="" width={100} height={100} />
          <h1 className="heading">Explora & Descubre</h1>
        </span>

        <div className="grid gap-2 bg-gray-50/50 border rounded-md shadow p-5 m-4 lg:grid-cols-2 pt-10">

          {categories.map((item, index) => (
            <span className="subheading underline cursor-pointer flex flex-row gap-2">

              {index % 3 === 0 ?
                <Image src="/icons/check-black.svg" alt="" width={20} height={20} />
                : <Image src="/icons/check-white.svg" alt="" width={20} height={20} />
              }

              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </span>
          ))}

        </div>

      </div>



    </main>
  )
}

export default Library

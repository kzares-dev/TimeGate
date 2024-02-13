
const categories = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9]

function Library() {

  return (
    <main className="container pt-[150px] h-screen w-full " >
        
        <div className="w-full  bg-white min-h-[200px] big-border px-3 py-5">

            <h1 className="heading"> Explora & Descubre </h1>

            <div className="">

                {categories.map(() => (
                    <div className="subheading"></div>
                ))}

            </div>

        </div>
       

      
    </main>
  )
}

export default Library

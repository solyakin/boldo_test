import { testimonies } from "../data/mockdata"

const Testimony = () => {
  return (
    <div className="bg-darkblue">
        <div className="max-w-6xl py-32 px-6 lg:px-0 mx-auto">
            <div className="max-w-3xl">
                <h3 className="text-2xl md:text-4xl text-white">An enterprise template to ramp up your company website</h3>
            </div>
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
                {
                    testimonies.map(({id, comment, author, role, photo}) => (
                        <div className="bg-white rounded-md py-4 px-8" style={{height : "max-content"}} key={id}>
                            <p className="my-3 text-lg">{comment}</p>
                            <div className="my-5 flex items-center gap-2">
                                <img src={photo} alt="author" className="w-10" />
                                <div className="">
                                    <h4 className="font-semibold text-sm">{author}</h4>
                                    <p className="font-light text-sm">{role}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Testimony
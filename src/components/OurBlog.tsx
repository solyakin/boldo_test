import { blogList } from "../data/mockdata"

const OurBlog = () => {
  return (
    <div className="max-w-6xl my-48 mx-auto px-6">
        <div className="max-w-3xl mb-20 mx-auto text-center">
            <p className="font-semibold text-gray-500 mb-6">Our Blog</p>
            <h3 className="text-gray-700 leading-10 text-2xl md:text-4xl">Value proposition accelerator product management venture</h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {
                blogList.map(({id, photo, text, blogger, date, preview }) => (
                    <div className="space-y-6" key={id}>
                        <img src={preview} alt="" className="w-full" />
                        <div className="space-y-4">
                            <p className="text-sm font-semibold text-darkblue">
                                Category
                                <span className="text-gray-400 font-normal text-xs ml-2">{date}</span>
                            </p>
                            <p className="leading-8">{text}</p>
                            <div className="flex gap-2 items-center">
                                <img src={photo} className="w-8 h-8" alt="" />
                                <p className="text-sm text-gray-600">{blogger}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        <div className="mt-20 text-center">
            <button className="border-2 border-darkblue w-48 py-3 rounded-full bg-white hover:bg-darkblue hover:text-white">Load more</button>
        </div>
    </div>
  )
}

export default OurBlog
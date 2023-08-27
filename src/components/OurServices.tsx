import { ArrowRightIcon } from "@heroicons/react/24/outline"
import { mockdata } from '../data/mockdata'

type ArrayProps = {
    id: number;
    text: string;
    img: string;
}
const OurServices = () => {
  return (
    <div className="bg-darkblue">
        <div className="max-w-7xl mx-auto py-16 px-6">
            <div className="max-w-2xl mx-auto text-center mb-12">
                <p className="mb-3 text-white">Our services</p>
                <h2 className="text-2xl md:text-4xl font-base leading-snug text-white">Handshake infographic mass market crowdfunding iteration.</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
                {
                    mockdata.map(({ id, text, img} : ArrayProps) => (
                        <div className="text-white" key={id}>
                            <img src={img} alt="" className="" />
                            <div className="mt-4">
                                <p className="font-light">{text}</p>
                                <span className=" cursor-pointer flex items-center gap-5 mt-4 ">
                                    Explore page
                                    <ArrowRightIcon className="text-white w-5 h-5"/>
                                </span>
                                <div className="h-px w-32 lg:bg-gray-400 mt-2" aria-hidden="true" />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default OurServices
import arc from '../assets/Ellipse 9.png'
import topImage from '../assets/Group 256.svg'
import bottomImage2 from '../assets/Group 264.svg'
import bottomImage3 from '../assets/Group 286.svg'
import { logo, logoPres, logoPres2 } from '../entryFiles/filepath'

const Hero = () => {
  return (
    <div className='px-6 max-w-7xl mx-auto h-screen'>
        <div className="absolute -z-10 top-0 right-0">
            <img src={arc} alt="arc" className='w-auto' />
        </div>
        <div className="mt-32 lg:flex items-center gap-32">
            <div className="flex-1 flex flex-col gap-y-5">
                <h1 className='text-3xl md:text-5xl md:leading-snug'>Save time by building  fast with Boldo Template </h1>
                <p className='text-gray-500'>Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.</p>
                <div className="lg:flex items-center mt-6 gap-3">
                    <button className='w-full lg:w-48 mb-3 lg:mb-0 py-3 rounded-full border-0 bg-darkblue text-white font-semibold'>Buy Template</button>
                    <button className='w-full lg:w-48 py-3 rounded-full border-2 border-darkblue text-darkblue font-bold'>Explore</button>
                </div>
            </div>
            <div className="mt-8 lg:mt-0 flex flex-col gap-4">
                <img src={topImage} alt="" />
                <div className="flex gap-4 lg:gap-8">
                    <div className="w-5/12 relative bg-shadeblue rounded-xl p-3">
                        <img src={bottomImage3} alt="" className='w-auto' />
                    </div>
                    <img src={bottomImage2} alt="" className='w-7/12' />
                </div>
            </div>
        </div>
        <div className="hidden mt-20 lg:flex items-center justify-between">
            <img src={logo} alt="" className='h-9'/>
            <img src={logoPres} alt="" />
            <img src={logo} alt="" className='h-9'/>
            <img src={logoPres} alt="" />
            <img src={logo} alt="" className='h-9'/>
            <img src={logoPres2} alt="" />
        </div>
    </div>
  )
}

export default Hero
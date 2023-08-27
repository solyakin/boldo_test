import { checkicon, eyeIcon, leaf, manOnPhone, sunIcon, woman } from "../entryFiles/filepath"

const CTA = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-32">
        <div className="lg:flex items-center lg:gap-48">
            <img src={manOnPhone} alt="" />
            <div className="">
                <h3 className="text-2xl md:text-4xl leading-normal">We connect our customers with the best, and help them keep up-and stay open.</h3>
                <div className="space-y-8 mt-12">
                    <div className="flex gap-3 items-center">
                        <img src={checkicon} alt="" className="" />
                        <p className="text-slate-700 md:text-xl">We connect our customers with the best.</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <img src={checkicon} alt="" className="" />
                        <p className="text-slate-700 md:text-xl">Advisor success customer launch party.</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <img src={checkicon} alt="" className="" />
                        <p className="text-slate-700 md:text-xl">Business-to-consumer long tail.</p>
                    </div>
                </div>
                <button className="font-semibold bg-darkblue text-white rounded-full w-48 py-3 mt-12">Start now</button>
            </div>
        </div>
        <div className="mt-32 lg:flex items-center lg:gap-48">
            <div className="mb-10 lg:mb-0">
                <h3 className="text-2xl md:text-4xl leading-normal">We connect our customers with the best, and help them keep up-and stay open.</h3>
                <div className="space-y-8 mt-12">
                    <div className="flex bg-darkblue gap-3 p-3 rounded items-center">
                        <img src={leaf} alt="" className="" />
                        <p className="text-white md:text-xl">We connect our customers with the best.</p>
                    </div>
                    <div className="flex shadow gap-3 p-3 rounded items-center">
                        <img src={eyeIcon} alt="" className="" />
                        <p className="text-slate-800 md:text-xl">Advisor success customer launch party.</p>
                    </div>
                    <div className="flex shadow gap-3 p-3 rounded items-center">
                        <img src={sunIcon} alt="" className="" />
                        <p className="text-slate-800 md:text-xl">Business-to-consumer long tail.</p>
                    </div>
                </div>
            </div>
            <img src={woman} alt="" />
        </div>
    </div>
  )
}

export default CTA
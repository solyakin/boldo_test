import { darkbg } from "../entryFiles/filepath"

const ContactUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
        <div className="bg-darkblue relative rounded px-5 md:px-10">
            <img src={darkbg} alt="" className="absolute right-0 z-10 w-100 "/>
            <div className="max-w-3xl py-32 mx-auto relative z-50">
                <h3 className="text-2xl md:text-4xl text-white text-center leading-snug">An enterprise template to ramp up your company website</h3>
                <form className="md:flex justify-center mt-16 items-center gap-3">
                    <input type="email" name="" placeholder="Your email address" className="outline-0 border-0 rounded-full px-4 py-2.5 w-full md:w-96" />
                    <button className="bg-lightgreen w-full mt-3 md:mt-0 md:w-48 py-2 rounded-full font-semibold">Start now</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ContactUs
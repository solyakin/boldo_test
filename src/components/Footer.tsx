import { logo } from "../entryFiles/filepath";

const navigation = {
    support: [
      { name: 'Home', href: '#' },
      { name: 'Products', href: '#' },
      { name: 'Services', href: '#' },
    ],
    company: [
      { name: 'Home', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Services', href: '#' },
    ],
    legal: [
      { name: 'Blog', href: '#' },
      { name: 'Products', href: '#' },
      { name: 'Services', href: '#' },
    ],
  }
  
const Footer = () => {
    return (
      <footer className="bg-white" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
          <div className="lg:grid lg:grid-cols-2 lg:gap-32">
            <div className="space-y-8">
              <img
                className="h-7"
                src={logo}
                alt="boldo"
              />
              <p className="text-sm leading-6 text-gray-600">
              Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="mt-3 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">Landing</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.support.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-3 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">Company</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.company.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                          {item.name}
                          {
                            item.name === 'Careers' && 
                          <span className="bg-lightgreen rounded-full px-2 text-xs ml-3 font-semibold text-slate-700">Hiring!</span>
                          }
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-3 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">Resources</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.legal.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              {/* </div> */}
            </div>
          </div>
          <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
            <p className="text-xs leading-5 text-gray-500">&copy; 2023 Boldo, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
}

export default Footer;
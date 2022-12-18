import React from "react";
import Logo from '@/public/assets/images/logo.svg'
import Image from "next/image";

const routes = [
    {name: 'Home',route:'/'},
    {name: 'Home',route:'/'},
]

const Navigation = () => {
    console.log('Navigation')
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
      <>
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white mb-3">
          <div className="w-full px-4 mx-auto flex flex-wrap lg:flex-row-reverse items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <a
                className="text-sm font-bold leading-relaxed inline-block py-2 whitespace-nowrap uppercase text-white"
                href="#pablo"
              >
                <Image src={Logo}/>
              </a>
              <button
                className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                Menu
              </button>
            </div>
            <div
              className={
                "lg:flex lg:flex-row-reverse justify-between flex-grow items-center" +
                (navbarOpen ? " flex" : " hidden")
              }
              id="example-navbar-danger"
            >
              <ul className="flex flex-col lg:flex-row list-none lg:mx-auto">
                {routes.map(item => (
                    <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-dark hover:opacity-75"
                    href={item.route}
                  >
                    <i className="fab fa-facebook-square text-lg leading-lg text-black opacity-75"></i><span className="ml-2">{item.name}</span>
                  </a>
                </li>
                ))}
              </ul>
              <button>my accunt</button>

            </div>
          </div>
        </nav>
      </>
    );
}
export default Navigation;
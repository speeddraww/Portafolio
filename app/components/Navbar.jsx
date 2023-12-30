"use client";
import Link from "next/link"
import NavLink from "./NavLink"
import { useState } from "react"
import MenuOverlay from "./MenuOverlay";



const navLinks = [
    {tittle: 'About', path: '#about'},
    {tittle: 'Projects', path: '#projects'},
    {tittle: 'Contact', path: '#contact'},
]

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <nav className="fixed mx-auto  top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90 ">
        <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-4 ">
      <Link href={'/'} className="text-2xl md:text-5xl font-semibold">
      <span className="text-white transition duration-300 ease-in-out transform hover:text-green-500 hover:scale-105">E</span>
      <span className="transition duration-300 ease-in-out transform hover:text-green-500 hover:scale-105">M</span>
      </Link>
      
        <div className=" mobile-menu block md:hidden">
          {
            navbarOpen ? (
              <button onClick={() => setNavbarOpen(!navbarOpen)}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            ) : (
              <button onClick={() => setNavbarOpen(!navbarOpen)}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            )
          }
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
              {
                  navLinks.map((link, index) => (
                      <li key={index} >
                          <NavLink href={link.path} tittle={link.tittle}/>
                      </li>
                  ))  
              }
                
            </ul>
        </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  )
}

export default Navbar
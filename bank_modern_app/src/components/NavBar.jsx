import React from 'react'

import { useState } from 'react'
import { close, logo, menu, newlogo } from "../assets"
import { navLinks } from "../constants"


const NavBar = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar' >
      <img src={newlogo} alt="hoobank" className='w-[114px] h-[72px] ' />
      <h1 className='flex-1 font-poppins font-semibold ss:text-[50px]
                       text-[52px] text-white ss:leading-[100px] ml-5 ' >
      <span className='text-gradient'>
        RWA <br className='sm:block hidden' /> {" "}
      </span>
      </h1>

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] 
            ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}
          >
            <a href={`#${nav.id}`} > {/*this it what makes redirecionate the page when i click ?? */}
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center" >
        <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((prev) => !prev)} />

        <div className={`${toggle ? "flex" : "hidden"}
             p-6 bg-black-gradient absolute top-20 right-0
             mx-4 my-2 min-w-[140px] rounded-xl sidebar `} >

          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] 
            ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}
              >
                <a href={`#${nav.id}`} >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>

        </div>

      </div>



    </nav>
  )
}

export default NavBar
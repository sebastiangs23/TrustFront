import React from 'react'
import styles from '../style'
import { newlogo } from '../assets'
import { footerLinks } from "../constants"

const Redirect = () => {
  return (
    <section id="product"  className={`${styles.flexCenter} ${styles.paddingY} flex-col `} >
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full `} >
        <div className='flex-1 flex flex-col justify-start mr-0 ' >
          <img src={newlogo} alt="crypto" className='w-[266px] h-[72px] object-contain ' />

          <p className={`${styles.paragraph} mt-4 max-w-[310px] `} > All the official Links of the projects and protocols. </p>
        </div>

        <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10 ' >
          {footerLinks.map((fl) => (
            <div key={fl.key} className='flex flex-col ss:my-0 my-4 min-y-[150px]'  >
              <h4 className='font-poppins font-medium text-[38px] leading-[27px] text-white  '  >
                {fl.title}
              </h4>
              <ul className='list-one mt-4' >
                {fl.links.map((link, index) => (
                  <li key={link.name} href={link.link} className={`font-poppins font-normal text-[26px] leading-[24px] text-dimWhite 
                                                  hover:text-secondary cursor-pointer ${index !== fl.length - 1 ? "mb-4" : 'mb-0'} `} >
                    <a href={link.link} target="_blank" >
                      {link.name}
                    </a>

                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>



    </section>
  )
}

export default Redirect
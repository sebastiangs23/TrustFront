import React from 'react'
import styles from '../style'
// import "./scroll.css";

import { NavBar, Hero, Stats, Benefits, CreditCard, Plans, Testimonials, Sponsor, CTA, Redirect, Last, Cryptos } from "./index.js"


const WrapHome = () => {
  return (
    <div className="bg-primary w-full overflow-hidden" >

      <div className='scrollnew' > //prueba dentro
        <div className={`${styles.paddingX} ${styles.flexCenter}`} >
          <div className={`${styles.boxWidth}`} >
            <NavBar />
          </div>
        </div>

        <div className={`bg-primary ${styles.flexStart}`} >
          <div className={`${styles.boxWidth}`} >
            <Hero />
          </div>
        </div>


        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`} >
          <div className={`${styles.boxWidth}`} >
            <Stats />
            <Plans />
            <Benefits />
            <Testimonials />
            <Redirect />
            <Sponsor />
            <Last />
          </div>
        </div>

      </div>



    </div>
  )
}

export default WrapHome
import React from 'react'
import { card, tres, } from "../assets"
import styles, { layout } from '../style'
import Button from './Button'


const Plans = () => {  //Change name
  return (
    <section id='plans' className={layout.section} >
      <div className={layout.sectionInfo} >
        <h2 className={styles.heading2} >Lunar Strategy<br className='sm:block hidden' /></h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 `} >
           Our new stacking system of witch we are proud, basically you have the option to block your assets, in a period of months,
           quarters o annually. 
           <br />
           <br />
           Example: If you stake 100,000$ in etherium in an annual plan, your APY will be 20%, then in the course of the year
           suppose you buy a car for 25,000$ with your credit card. At the end of the stacking period(APY) your debt will only be 5000$, 
           because your stacked etherium was paying the debt. 
        </p>


      </div>

      <div className={layout.sectionImg} >
        <img src={tres} alt="card" className="w-[100%] h-[100%] " />
        <div className='absolute z-[0] w-[40%] h-[30%] top-0 pink__gradient ' />
        {/* <div className='absolute z-[1] w-[50%] h-[50%] rounded-full bottom-40 pink__gradient ' />
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient ' /> */}
      </div>



    </section>
  )
}

export default Plans
import React from 'react'
import { feedback } from "../constants"
import styles from '../style'
import FeedBack from "./FeedBack"

const Testimonials = () => {
  return (
    <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}  >

      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient ' />


      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb16 mb:6 relative z-[1]' >
        <h1 className={styles.heading2} >
          What the people are <br className='sm:block hidden' /> saying about the industry.
        </h1>
        <div className='w-full md:mt-0 mt-6'>
          <p className={`${styles.paragraph} text-left max-w-[450px] `} >
            "They are an alternative, safe and efficient way to exchange goods or services that positively affect 
            the economy due to their descentralization, great liquidity and flexibility."
          </p>
        </div>
      </div>

      <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]  ' >
          {feedback.map((card) => (
              <FeedBack key={card.id} {...card}  />       
          ))}
      </div>
    </section>
  )
}

export default Testimonials
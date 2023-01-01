import React from 'react'
import { bill, trustcardb, newtrustcard } from "../assets"
import styles, { layout } from '../style'
import { billingC } from "../constants"

const CreditCard = () => { //Trust Cards //here i gonna put the new object

  const BillingCard = ({ icon, title, content, index }) => (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== billingC.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
          {content}
        </p>
      </div>
    </div>
  );


  return (
    <section id='cards' className={layout.sectionReverse} >
      <div className={layout.sectionImgReverse} >
        <img src={newtrustcard} alt="billing" className="w-[100%] h-[100&] relative z-[5]  " />
        <div className='absolute z-[3] -left-1/2 top-0 w-[30%] h-[50%] rounded-full white__gradient ' />
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[60%] h-[70%] rounded-full pink__gradient ' />
      </div>


      <div className={layout.sectionInfo} >
        <h2 className={styles.heading2}>
          We present you <br className='sm:block hidden' />
          the Trust Card.
        </h2>
        <div className={`${layout.sectionImg} flex-col`}>
          {billingC.map((billingC, index) => (
            <BillingCard key={billingC.id} {...billingC} index={index} />
          ))}
        </div>



      </div>

    </section>
  )
}

export default CreditCard;
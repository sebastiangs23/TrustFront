import React from 'react'


const Button = ({ styles }) => {
  return (
    <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins 
                          font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`} >
         <a href='https://www.tradingview.com/' target="_blank" >
         Market
          </a>                        
        
    </button>
  )
}

export default Button
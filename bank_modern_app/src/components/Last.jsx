import React from 'react'
import { socialMedia } from "../constants"

const Last = () => {
    return (
        <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45] mb-20' >
            <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white  ' >
                2022 Trust . All Rights Reserved.
            </p>
            <div className='flex flex-row md:mt-0 mt-6 ' >
                {socialMedia.map((social, index) => (
                    <a href={social.link} target="_blank">
                        <img key={social.id} src={social.icon} alt={social.id}
                            className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'} `} />
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Last
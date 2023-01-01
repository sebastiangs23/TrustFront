import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { useSelector, useDispatch } from 'react-redux'
import { getNews } from '../store/actions';


function News() {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.news)

  //slider
  const [activeSlider, setActiveSlider] = useState(1)

  const prevSliderHandler = (id) => {
    if (id === 1) {
      setActiveSlider(data.length) //?
    } else if (id > 1) {
      setActiveSlider(activeSlider - 1)
    } else {
      setActiveSlider(data.length - 1)
    }
  }

  const nextSliderHandler = (id) => {
    if (id === data.length) {
      setActiveSlider(1) //?
    } else if (id < data.length) {
      setActiveSlider(activeSlider + 1)
    } else {
      setActiveSlider(data.length - 1)
    }
  }

  useEffect(() => {
    dispatch(getNews())
  }, [])

  return (
    <div className='sidebar text-center text-white h-[650px] w-[310px] bg-zinc-800 m-5 rounded-lg'>
      <div className="min-w-fit min-h-fit rounded-2xl bg-center bg-cover duration-500" >

        {
          data.map((e) => {
            return (
              <div key={e.Id} className={activeSlider === e.Id ? "flex justify-between items-center" : "hidden"} >


                <div className='flex flex-col items-center' >
                  <h2 className='font-bold text-2xl mt-5 p-1'> {e.Title} </h2>
                  <h2 className='border-blue-500 p-1 bg-blue-600 font-bold mb-2 mt-2'> {e.Topic} </h2>

                  <div className='relative group'>
                    <div className='hidden group-hover:block absolute top-[50%] -traslate-x-0 translate-y-[-50%] left-2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer ' >
                      <BsChevronCompactLeft onClick={() => prevSliderHandler(e.Id)} />
                    </div>

                    <a href={e.URL} target="_blank" className='p-1' >
                      <img src={e.Banner} alt=""  />
                    </a>

                    <div className='hidden group-hover:block absolute top-[50%] -traslate-x-0 translate-y-[-50%] right-2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer '>
                      <BsChevronCompactRight onClick={() => nextSliderHandler(e.Id)} />
                    </div>
                  </div>


                  <h2 className='italic mt-3'> Source: {e.Source} </h2>
                  <h2 className='italic'> Author: {e.Author} </h2>

                </div>



              </div>
            )
          })
        }



      </div>





    </div>


  )
}

export default News

import React from 'react'
import { getTrendingCoins } from '../store/actions'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'


const Trending = () => {
    const dispatch = useDispatch();
    const trendingCoins = useSelector((state) => state.trending)

    useEffect(() => {  
        dispatch(getTrendingCoins()) ;
    }, [])

    return (
        <div>

            <div className=' rounded-lg shadow hidden md:block'>

                {/* <div>  
                    <input onChange={(e) => handleChange(e)} type="text" className=' text-black font-bold' />
                    <button className='text-white font-bold border-2 rounded-sm' ><AiOutlineSearch /></button>
                </div> */}
                <div class="flex justify-center  rounded-lg ">
                    <table class="shadow-2x1 font-[Poppins] w-[700px]">
                        <thead className='text-white '>
                            <tr className='text-white  hover:bg-cyan-100 hover:scale-95 flex flex-row p-6 rounded-[20px] feature-card font-bold'>
                                <td className='py-8 px-4 text-white-800 bg-gray-200 rounded-lg bg-opacity-50 whitespace-nowrap'>Rank</td>
                                <td className='py-8 px-4 whitespace-nowrap'>Coin</td>
                                <td className='py-8 px-4 whitespace-nowrap'>Name</td>
                                <td className='py-8 px-4 whitespace-nowrap'>Symbol</td>
                                
                            </tr>

                        </thead>
                        <tbody>
                            {trendingCoins.map((c) => {
                                return (
                                    <tr className='text-white sm:mr-5 mr-0  hover:bg-cyan-100 hover:scale-95 flex flex-row p-6 rounded-[20px]  feature-card'>
                                        <td className='py-8 px-4 font-semibold  whitespace-nowrap'>
                                            {c.rank}
                                        </td  >
                                        <td className='py-8 px-4 whitespace-nowrap'>
                                            <img src={c.image} className="w-[28px] h-[27px]" />
                                        </td>
                                        <td className='py-8 px-4 font-semibold  whitespace-nowrap'>
                                            {c.name}
                                        </td  >
                                        <td className='py-8 px-4 font-semibold  whitespace-nowrap'>
                                            {c.symbol}
                                        </td  >
                                    </tr>
                                )
                            }
                            )}
                        </tbody>


                    </table>

                    {/* <div className='absolute z-[0] w-[30%] h-[40%] right-20 bottom-20 blue__gradient ' /> */}
                </div>

            </div>


        </div>
    )
}

export default Trending
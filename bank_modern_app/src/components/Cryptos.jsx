import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { getAllCryptos } from "../store/actions"
import styles from '../style'
import { useState } from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'
import { AiOutlineSearch } from "react-icons/ai";
import { newlogo } from '../assets'
import Allcryptos from './Allcryptos.jsx';
import Trending from './Trending.jsx';
import News from './News.jsx'
import Stock from './Stock.jsx'
import { SiBitcoinsv } from "react-icons/si";
import { AiFillFire } from "react-icons/ai";
import { RiStockFill } from "react-icons/ri";




const Cryptos = () => {

    const [menuItem, setMenuItem] = useState("")
    const [component, setComponent] = useState("")

    const render = (activeMenu) => {
        switch (component) {
            case "allcoins": {
                return <Allcryptos />
            }
            case "trending": {
                return <Trending />
            }
            case "stock": {
                return <Stock />
            }
            default: {
                return <Allcryptos />
            }
        }
    }


    return (

        <div className='bg-primary   '>

            <div className="flex bg-white-600 h-screen w-screen">

                <div className="sidebar top-0 bottom-0 lg:left-0 p-2 rounded-br-full text-center bg-zinc-900 h-[520px] w-[200px] ">
                    <div class="flex justify-center items-center h-[92px] " >
                        <Link to="/" >
                            <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins 
                          font-medium text-[13px] text-primary outline-none ${styles} rounded-[10px]`} >
                                Back
                            </button>
                        </Link>
                    </div>

                    <div className='' >

                        <div className='flex justify-center' >
                            <img src={newlogo} alt="hoobank" className='w-[85px] h-[52px]  ' />
                        </div>
                        <h1 className=' font-poppins font-semibold text-[42px] text-white   ' >
                            <span className='text-gradient'>
                                Trust
                            </span>
                        </h1>
                    </div>

                    <aside className='text-gray-100 text-l mx-1'>
                        <div onClick={() => setComponent("allcoins")} className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursos-pointer hover:bg-cyan-600 text-white cursor-pointer" >
                            <SiBitcoinsv />
                            <h2 className="font-bold text-gray-200">Top 100 Cryptos</h2>
                        </div>

                        <div onClick={() => setComponent("trending")} className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursos-pointer hover:bg-cyan-600 text-white cursor-pointer" >
                            <AiFillFire />
                            <h2 className="font-bold text-gray-200">Crypto Trending</h2>
                        </div>
                        <div onClick={() => setComponent("stock")} className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursos-pointer hover:bg-cyan-600 text-white cursor-pointer" >
                            <RiStockFill />
                            <h2 className="font-bold text-gray-200">Nasdaq</h2>
                        </div>
                    </aside>
                </div>

                <div className='w-[1000px] overflow-auto'>
                    {render()}
                </div>

                <News/>

            </div>



        </div>
    )
}

export default Cryptos
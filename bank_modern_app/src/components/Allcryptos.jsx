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

function Allcryptos() {

    const [coins, setCoins] = useState([])
    const [tablaCoins, setTablaCoins] = useState([])
    const [input, setInput] = useState("");

    const bringData = async () => {
        // await axios.get("https://deployback-production.up.railway.app/")
        await axios.get("http://localhost:3005/") //
            .then(r => {
                setCoins(r.data)
                setTablaCoins(r.data)
            }).catch(e => {
                console.log(e)
            })
    }


    const handleChange = (e) => {
        setInput(e.target.value)
        filtrar(e.target.value)
    }

    const filtrar = (terminobusqueda) => {
        var resultadobusqueda = tablaCoins.filter((elemento) => {
            if (elemento.name.toString().toLowerCase().includes(terminobusqueda.toLowerCase()) ||
                elemento.symbol.toString().toLowerCase().includes(terminobusqueda.toLowerCase())) {
                return elemento
            }
        })
        setCoins(resultadobusqueda)
    }

    useEffect(() => {
        bringData()
    }, [])


    return (
        <div className='flex w-[1000px] '>
            <div className=' rounded-lg shadow hidden md:block'>

                <div className='mt-2 flex'>
                    <input onChange={(e) => handleChange(e)} type="text" className='text-black pb-1 pl-1 pr-1 rounded-sm ml-7' placeholder='Search' />
                    <div>
                        <button className='text-white font-bold border-2 rounded-sm text-3xl ml-2' ><AiOutlineSearch /></button>
                    </div>
                </div>
                <div class="flex justify-center rounded-lg ">
                    <table class="shadow-2x1 font-[Poppins] w-[700px] ">
                        <thead className='text-white '>
                            <tr className='text-white  hover:bg-cyan-100 hover:scale-95 flex flex-row p-6 rounded-[20px] feature-card font-bold'>
                                <td className='py-8 px-4 text-white-800 bg-gray-200 rounded-lg bg-opacity-50 whitespace-nowrap'>Rank</td>
                                <td className='py-8 px-3 whitespace-nowrap '>Coin</td>
                                <td className='py-8 px-4 whitespace-nowrap'>Symbol</td>
                                <td className='py-8 px-4 whitespace-nowrap'>Name</td>


                                <td className='py-8 px-10 whitespace-nowrap'>Price</td>
                                <td className='py-8 px-4 whitespace-nowrap'>MarketCap</td>
                                <td className='py-8 px-4 whitespace-nowrap'>Volumen</td>
                                <td className='py-8 px-4 whitespace-nowrap'>Supply</td>
                            </tr>

                        </thead>
                        <tbody>
                            {coins.map((c) => {
                                return (
                                    <tr className='text-white sm:mr-5 mr-0  hover:bg-cyan-100 hover:scale-95 flex flex-row p-6 rounded-[20px]  feature-card'>
                                        <td className='py-8 px-10 font-semibold  whitespace-nowrap'>
                                            {c.rank}
                                        </td  >
                                        <td className='py-8 px-4 whitespace-nowrap'>
                                            <img src={c.image} className="w-[28px] h-[27px]" />
                                        </td>
                                        <td className='py-8 px-4 font-semibold whitespace-nowrap'>
                                            {c.symbol}
                                        </td>
                                        <td className='py-8 px-8 font-semibold  whitespace-nowrap'>
                                            {c.name}
                                        </td>


                                        <td className='py-8 px-4 whitespace-nowrap'>
                                            {c.price}$
                                        </td>
                                        <td className='py-8 px-4 whitespace-nowrap'>
                                            {c.marketCap}$
                                        </td>
                                        <td className='py-8 px-4 whitespace-nowrap'>
                                            {c.volumen}$
                                        </td>
                                        <td className='py-8 px-4 whitespace-nowrap'>
                                            {c.supply}
                                        </td>

                                    </tr>
                                )
                            }
                            )}
                        </tbody>


                    </table>

                    {/* <div className='absolute z-[0] w-[30%] h-[40%] right-20 bottom-20 blue__gradient ' /> */}
                </div>

            </div>

            <div className='grid grid-cols-1 gap-4 md:hidden' >
                <div className='absolute z-[0] w-[75%] h-[80%]  blue__gradient ' />


                <div className=' p-4 rounded-lg shadow' >
                    <div className='text-white sm:mr-5 mr-0 hoverscale-105 flex flex-row p-6 rounded-[20px] feature-card space-x-5' >
                        <div>Rank</div>
                        <div>Coin</div>
                        <div>Name</div>
                        <div>Symbol</div>
                        <div>Price</div>
                    </div>
                    <div className='flex items-center space-x-2 text-sm' >
                        <div>
                            {coins.map((c) => {
                                return (
                                    <div className='text-white sm:mr-5 mr-0 hoverscale-105 flex flex-row p-6 rounded-[20px] feature-card space-x-9'>
                                        <div  >
                                            {c.rank}
                                        </div  >
                                        <div  >
                                            <img src={c.image} className="w-[23px] h-[22px]" />
                                        </div>
                                        <div >
                                            {c.name}
                                        </div>

                                        <div  >
                                            {c.symbol}
                                        </div>
                                        <div  >
                                            {c.price}
                                        </div>

                                    </div>
                                )
                            }
                            )}
                        </div>

                    </div>
                </div>
            </div>





        </div>
    )
}

export default Allcryptos
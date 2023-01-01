import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getStockDaily, getStockPrice, getStockInfo } from '../store/actions';
import Plot from 'react-plotly.js';
import { AiOutlineSearch } from "react-icons/ai";

function Stock() {

    const dispatch = useDispatch();
    const stockX = useSelector((state) => state.stockXDaily)
    const stockY = useSelector((state) => state.stockYPrice)
    const stockInfo = useSelector((state) => state.stockInfo)

    const [search, setSearch] = useState("")

    function handleChange(e) {
        console.log(e.target.value)
        setSearch(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(getStockDaily(search))
        dispatch(getStockPrice(search))
        dispatch(getStockInfo(search))
    }

    useEffect(() => {
        dispatch(getStockDaily("tsla"))
        dispatch(getStockPrice("tsla"))
        dispatch(getStockInfo("tsla"))
    }, [])

    return (
        <div className='text-white'>

            <form className='mt-2 flex'>
                <input className='text-black pb-1 pl-1 pr-1 rounded-sm ml-20 ' placeholder='Symbol' onChange={(e) => { handleChange(e) }} type="text" />
                <div>
                    <button onClick={(e) => { handleSubmit(e) }} type="submit" className='text-white font-bold border-2 rounded-sm text-3xl ml-2' ><AiOutlineSearch /></button>
                </div>
            </form>


            <div className='text-white'>
                {stockInfo.map((e) => {
                    return (
                        <div className='mt-2' >
                            <div className='flex ml-20'>
                                <h2 className="text-white italic flex mb-4 border-red-500 p-1 bg-red-600 font-bold rounded-md w-[300px] mr-5"> Name: {e.Name}</h2>
                                <h2 className='text-white italic flex mb-4 border-red-500 p-1 bg-red-600 font-bold rounded-md w-[300px] mr-5' >Symbol: {e.Symbol}</h2>
                            </div>
                            <div className='flex ml-20'>
                                <h2 className='text-white italic flex mb-4 border-red-500 p-1 bg-red-600 font-bold rounded-md w-[300px] mr-5' >Currency: {e.Currency}</h2>
                                <h2 className='text-white italic flex mb-4 border-red-500 p-1 bg-red-600 font-bold rounded-md w-[300px] mr-5' >Sector: {e.Sector}</h2>
                            </div>

                        </div>
                    )
                })}

            </div>

            <div className='ml-20 mt-1'>
                <Plot
                    data={[
                        {
                            x: stockX,
                            y: stockY,
                            type: 'scatter',
                            mode: 'lines+markers',
                            marker: { color: 'red' },
                        },
                        // { type: 'bar', x: stockX, y: stockY },
                    ]}
                    layout={{ width: 820, height: 600, title: 'NASDAQ' }}
                />
            </div>


        </div>
    )
}

export default Stock
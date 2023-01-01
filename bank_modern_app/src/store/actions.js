import axios from "axios";
const URL = "https://trust-back-jcx313p33-sebastiangs23.vercel.app"

export function getAllCryptos() {
    return async function (dispatch) {
        var cryptos = await axios.get(`${URL}`)
        return dispatch({
            type: "GET_CRYPTOS",
            payload: cryptos.data
        })
    }
}

export function getTrendingCoins() { //
    return async function (dispatch) {
        let trending = await axios.get(`${URL}/trending`);
        return dispatch({
            type: "GET_TRENDING",
            payload: trending.data
        })
    }
}

export function getStockDaily(stockSymbol) {
    return async function (dispatch) {
        let stock = await axios.get(`${URL}/${stockSymbol}`)

        return dispatch({
            type: "GET_STOCK_DAILY",
            payload: stock.data
        })
    }
}

export function getStockPrice(stockSymbol) { 
    return async function (dispatch) {
        let stock = await axios.get(`${URL}/${stockSymbol}`)

        return dispatch({
            type: "GET_STOCK_PRICE",
            payload: stock.data
        })
    }
}

export function getStockInfo(stockSymbol){
    return async function(dispatch){
        let stock = await axios.get(`${URL}/${stockSymbol}`)

        console.log(stock.data)
        return dispatch({
            type: "GET_STOCK_INFO",
            payload: stock.data
        })
    }
}


export function getNews(){
    return async function(dispatch){
        let news = await axios.get(`${URL}/news`)
        return dispatch({
            type: "GET_NEWS",
            payload: news.data
        })
    }
}
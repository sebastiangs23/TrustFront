import axios from "axios";

export function getAllCryptos() {
    return async function (dispatch) {
        var cryptos = await axios.get("https://deployback-production.up.railway.app/")
        return dispatch({
            type: "GET_CRYPTOS",
            payload: cryptos.data
        })
    }
}

export function getTrendingCoins() { //
    return async function (dispatch) {
        let trending = await axios.get("http://localhost:3005/trending");
        return dispatch({
            type: "GET_TRENDING",
            payload: trending.data
        })
    }
}

export function getStockDaily(stockSymbol) {
    return async function (dispatch) {
        let stock = await axios.get(`http://localhost:3005/stockdaily/${stockSymbol}`)

        return dispatch({
            type: "GET_STOCK_DAILY",
            payload: stock.data
        })
    }
}

export function getStockPrice(stockSymbol) { 
    return async function (dispatch) {
        let stock = await axios.get(`http://localhost:3005/stockprice/${stockSymbol}`)

        return dispatch({
            type: "GET_STOCK_PRICE",
            payload: stock.data
        })
    }
}

export function getStockInfo(stockSymbol){
    return async function(dispatch){
        let stock = await axios.get(`http://localhost:3005/stockinfo/${stockSymbol}`)

        console.log(stock.data)
        return dispatch({
            type: "GET_STOCK_INFO",
            payload: stock.data
        })
    }
}


export function getNews(){
    return async function(dispatch){
        let news = await axios.get("http://localhost:3005/news")
        return dispatch({
            type: "GET_NEWS",
            payload: news.data
        })
    }
}
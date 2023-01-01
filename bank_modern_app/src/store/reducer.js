const initialState = { cryptos: [], trending: [], stockXDaily: [], stockYPrice: [], stockInfo: [], news: [] }

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_CRYPTOS":
            return {
                ...state,
                cryptos: action.payload,
            }
        
        case "GET_TRENDING": {
            return {
                ...state,
                trending: action.payload
            }
        }
        
        case "GET_STOCK_DAILY":{
            return {
                ...state,
                stockXDaily: action.payload
            }
        }

        case "GET_STOCK_PRICE": {
            return {
                ...state,
                stockYPrice: action.payload
            }
        }

        case "GET_STOCK_INFO" : {
            return {
                ...state,
                stockInfo: action.payload
            }
        }

        case "GET_NEWS": {
            return {
                ...state,
                news: action.payload
            }
        }

        default:
            return {
                ...state,
            }
    }
}


export default reducer;
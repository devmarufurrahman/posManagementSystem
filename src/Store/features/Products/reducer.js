import { 
    GET_ALL_ITEMS,
    GET_ALL_BRANDS,
    GET_ALL_SUB_CATEGORY,
    GET_ALL_CATEGORY,
    GET_ALL_MODEL,
} from "./actionType"

const initialState={
    items:[],
    category:[],
    subCategoey:[],
    brand:[],
    model:[]
}


const productsReducer=(state=initialState,action)=>{
    switch(action.type){
        case GET_ALL_ITEMS:{
            return{
                ...state,
                items:action.payload
            }
        }
        case GET_ALL_CATEGORY:{
            return{
                ...state,
                category:action.payload
            }
        }
        case GET_ALL_SUB_CATEGORY:{
            return{
                ...state,
                subCategoey:action.payload
            }
        }
        case GET_ALL_BRANDS:{
            return{
                ...state,
                brand:action.payload
            }
        }
        case GET_ALL_MODEL:{
            return{
                ...state,
                model:action.payload
            }
        }
        default:
            return state
    }
}

export default productsReducer;
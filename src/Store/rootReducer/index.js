import { combineReducers } from "redux";
import productsReducer from "../features/Products/reducer";


const rootReducer=combineReducers({
    product:productsReducer
})

export default rootReducer;
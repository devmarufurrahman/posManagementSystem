import { 
    GET_ALL_ITEMS
} from "../../actionType";

export const getAllItemns=(itemLits)=>{
    return{
        type:GET_ALL_ITEMS,
        payload:itemLits
    }
}
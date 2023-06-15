import { 
    GET_ALL_BRANDS 
} from "../../actionType";

export const getAllBrand=(brandLists)=>{
    return{
        type:GET_ALL_BRANDS,
        payload:brandLists
    }
}
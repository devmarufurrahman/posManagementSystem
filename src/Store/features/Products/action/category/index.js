import { 
    GET_ALL_CATEGORY 
} from "../../actionType";

export const getAllCategory=(categoryLists)=>{
    return{
        type:GET_ALL_CATEGORY,
        payload:categoryLists
    }
}
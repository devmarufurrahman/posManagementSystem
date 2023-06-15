import { 
    GET_ALL_MODEL 
} from "../../actionType";

export const getAllModels=(modelLits)=>{
    return{
        type:GET_ALL_MODEL,
        payload:modelLits
    }
}
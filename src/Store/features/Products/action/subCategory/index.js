import { 
    GET_ALL_SUB_CATEGORY
} from "../../actionType";

export const getAllSubCategory=(subCategoryLists)=>{
    return{
        type:GET_ALL_SUB_CATEGORY,
        payload:subCategoryLists
    }
}
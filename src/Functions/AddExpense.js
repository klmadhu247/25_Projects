import React from "react";
import { ADD_EXPENSE } from "../Actions/actions";


function AddExpense ({description,amount}){
    return{
        type:ADD_EXPENSE,
        payload:{description,amount}
    }
}
export default AddExpense;
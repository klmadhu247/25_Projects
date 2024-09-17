import React from "react";
import { ADD_INCOME,ADD_EXPENSE } from "../../Actions/actions";
const ExpInitvalue = {
    Income: 0,
    Expense:0,
    Balance:0,
    Transactions:[]
}

const ExpReducer = (state=ExpInitvalue,action)=>

{
    switch (action.type) {
        case ADD_INCOME:
            return {...state,
                Income: parseInt(state.Income) + parseInt(action.payload.amount),
                Balance: state.Balance + parseInt(action.payload.amount), 
              };
    
        case ADD_EXPENSE:
          return {
            ...state,
            Expense: parseInt(state.Expense) + parseInt(action.payload.amount),
            Balance: state.Balance - action.payload.amount,
            
          };
    
        default:
          return state;
      }
    


}
export default ExpReducer;

import { ADD_INCOME } from "../Actions/actions";

function AddIncome ({description,amount}){
    return{
        type: ADD_INCOME,
        payload:{description,amount}

    }
}
export default AddIncome;
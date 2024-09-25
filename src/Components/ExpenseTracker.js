import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Exp.css';
import { useDispatch, useSelector } from "react-redux";
import AddIncome from "../Functions/AddIncome";
import AddExpense from "../Functions/AddExpense";


function ExpenseTracker() {
  const [showAddForm, setShowAddForm] = useState(false);

const [descript,setDescript] = useState('')
  const [amount,setAmount] = useState(0);
  const [trasnType,setTransType] = useState('')

  // const [expList,setExpList]= useState([]);
  // const [incomeList,setIncomeList]= useState([])

  const handleShowForm = () =>{
    setShowAddForm(true)

  }
  const handleCloseForm = () => {
    setShowAddForm(false)
}

const handleChange = (e) => {
   
    if (e.target.name === 'amount') {
      setAmount(e.target.value);
    } else if (e.target.name === 'descript') {
      setDescript(e.target.value);
    }
  };
  

const bal = useSelector((state) => state.Balance);
const inc = useSelector((state)=>state.Income)
const exp = useSelector((state)=> state.Expense)
const exList =useSelector((state)=>state.ExpenseList)
const inList = useSelector((state)=>state.IncomeList)

const dispatch = useDispatch()

const handleIncome=()=>
{
    setTransType('Income')
}

const handleExpense=()=>
{
    setTransType('Expense')
}


const handleADD = () => {
    
  
    if (trasnType === 'Income') {
      dispatch(AddIncome({ description: descript, amount: parseFloat(amount) }));
      // setIncomeList([...incomeList,{desc:descript,amount:amount}]);
    } 
    else if (trasnType === 'Expense') {
      dispatch(AddExpense({ description: descript, amount: parseFloat(amount) }));
      // setExpList([...expList,{desc:descript,amount:amount}])
    }

    console.log('The Amout is: '+amount)
  
    handleCloseForm();
  };
  


  return (
    <div>
      <div className="d-flex justify-content-between align-center mt-4 p-4" style={{ backgroundColor: '#f8f9fa' }}>
        <h3 className="ms-3" style={{ color: 'blue' }}>Expense Tracker</h3>
        <button className="btn btn-primary me-3" onClick={handleShowForm}>Add New Transaction</button>
      </div>

      <div style={{  marginTop: '50px', }}>
        <div className="d-flex flex-column align-items-center text-center">
          <span style={{marginBottom:'5px'}}>Balance is $ <b>{bal}</b> </span>
        <div className="boxShape"> <h4 style={{paddingTop:'10px'}}>${inc}</h4>
          Total Income
          </div>
          <div className="separator"></div>
         <div className="boxShape"> <h4 style={{paddingTop:'10px'}}>${exp}</h4>
          Total Expense
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-around">
        <div>
            <p>Expense</p>
            {/* { expList.map(exl=><div className="d-flex justify-content-between">
                <span>{exl.desc}</span> <span>{exl.amount}</span></div>)}
                */}

                {exList.map(el=><div className="d-flex justify-content-between">
                  <span>{el.desc}</span><span>{el.amount}</span></div>)}

            

        
        </div>

       <div><p>Income</p>
       {/* { incomeList.map(inl=><div className="d-flex justify-content-between">
                <span>{inl.desc}</span> <span>{inl.amount}</span></div>)} */}

                {inList.map(il=><div className="d-flex justify-content-between">
                  <span>{il.desc}</span> <span>{il.amount}</span></div>)}

       
       
       
       </div> 
      </div>

     
      {showAddForm && (
        <div className="modal d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5>Add New Transaction</h5>
                <button type="button" className="btn btn-close"  onClick={handleCloseForm}></button>
                 
               
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label><h6>Enter Description</h6></label>
                    <input type="text" className="form-control"name="descript" placeholder="Enter description" onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label><h6>Enter Amount</h6></label>
                    <input type="number" name="amount" className="form-control" placeholder="Enter Transaction amount"  onChange={handleChange}/>
                  </div>
                  <div className="d-flex mt-1">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" onChange={handleIncome} />
                    <label className="form-check-label"><h6>Income</h6></label>
                  </div>
                  <div className="form-check ">
                    <input className="form-check-input" type="radio" onChange={handleExpense}/>
                    <label className="form-check-label" htmlFor="expense"><h6>Expense</h6></label>
                  </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                
                <button type="button" className="btn btn-secondary" onClick={handleCloseForm}>Cancel</button>
                <button type="button" className="btn btn-primary" onClick={handleADD}>Add</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ExpenseTracker;

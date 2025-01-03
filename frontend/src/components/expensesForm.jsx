import { useState } from "react"
import { expenses } from './../services/expenses'
const options = [
    {
      title: "Hotel",
      value: "Hotel"
    },
    {
      title: "Rent",
      value: "Rent"
    },
    {
      title: "Traveling",
      value: "Traveling"
    },
    {
        title: "Others",
        value: "Others"
    }
  ]

function ExpensesForm(props) {
    const { setExpenses, expensesData } = props
    const [expense, setExpense] = useState({
        towards: '',
        date: '',
        amount: ''
    })
    
    function handleExpenseSubmit(e) {
        if ((expense.amount && !isNaN(expense.amount)) && expense.date && expense.towards) {
            return expenses.createExpenses(expense).then((res)=>{
                setExpenses([...expensesData, expense])
                setExpense({
                    towards: '',
                    date: '',
                    amount: ''
                })
            })
        } else {
            alert('Validation failed')
        }
    }

    function handleInput(e) {
        const { name, value } = e.target
        if (typeof name == 'string') {
            setExpense({...expense, [name]: value})
        }
    }

    return (<>
      <h1>Expenses Tracker</h1>
      <form>
        Expenses: <select onChange={handleInput} name='towards' value={expense.towards}>
          {
            options.map((item, i)=>(<option key={i} value={item.value}>{item.title}</option>))
          }
        </select><br/>
        Date: <input type='date' name='date' onChange={handleInput} value={expense.date}/><br/>
        Amount: <input type='text' name='amount' onChange={handleInput} value={expense.amount}/><br/>
        
        <button type='button' onClick={handleExpenseSubmit}> Submit </button>
      </form>
    </>)
}

export default ExpensesForm
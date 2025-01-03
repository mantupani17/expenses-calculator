import { useEffect, useState } from 'react'
import './App.css'
import ExpensesForm from './components/expensesForm'
import ListExpenses from './components/listExpenses'
import { expenses } from './services/expenses'


function App() {
  const [expenseList, setExpenseList] = useState([])

  useEffect(()=>{
    expenses.getExpenses()
    .then(async (res)=>{
      const data = await res.data
      setExpenseList(data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }, [])

  return (
    <>
      <ExpensesForm setExpenses={setExpenseList} expensesData={expenseList}/>
      <ListExpenses expenses={expenseList}/>
    </>
  )
}

export default App

const apiBaseUrl = 'http://localhost:3000/api/expenses'
import axios from 'axios'
export const expenses = {
    createExpenses : (expense) => {
        return axios.post(apiBaseUrl, expense)
    },
    getExpenses: () => {
        return axios.get(apiBaseUrl)
    }
}
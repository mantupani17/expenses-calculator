function ListExpenses(props) {
    const { expenses } = props
    return (<table>
        <thead>
            <tr>
                <th>Expense Towards</th>
                <th>Expense Date</th>
                <th>Expense Amount</th>
            </tr>
        </thead>    
        <tbody>
            {
                expenses && expenses.map((item, i)=> {
                    const tmpDate = new Date(item.date).toISOString()
                    return (
                        <tr key={i}>
                            <td>{item.towards}</td>
                            <td>{tmpDate}</td>
                            <td>{item.amount}</td>
                        </tr>
                    )
                })
            }   
        </tbody>    
    </table>)
}

export default ListExpenses
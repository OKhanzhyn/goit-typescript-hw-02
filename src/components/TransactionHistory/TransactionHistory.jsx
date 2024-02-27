import css from './TransactionHistory.module.css';

const TransactionHistory = ({items}) => {
  return (
    <div>
      
<table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>

    {items.map((item) => {
        console.log(item)
 return <tr key={item.id}>
        <td>{item.type}</td>
        <td>{item.amount}</td>
        <td>{item.currency}</td>
      </tr>
    })}
    
  </tbody>
</table>

    </div>
  )}

export default TransactionHistory

/* <tr>
      <td>Invoice</td>
      <td>125</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr> */
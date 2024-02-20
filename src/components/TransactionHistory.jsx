const TransactionHistory = ({ items }) => (
    <table>
       {items.map(item => (
        <tr key={item.id}>
        <TransactionRow
         type={item.type}
         amount={item.amount}
         currency={item.currency}
         />
        </tr>
       ))}
    </table>
)

const TransactionRow = ({ type, amount, currency }) => (
    <>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
    </>
)

export default TransactionHistory
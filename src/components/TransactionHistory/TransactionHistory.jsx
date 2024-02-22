import css from './TransactionHistory.module.css';
const TransactionHistory = ({ items }) => (
    <table className={css.table}>
    <thead> 
        <tr>
            <th className={css.tableThElement}>Type</th>
            <th className={css.tableThElement}>Amount</th>
            <th className={css.tableThElement}>Currency</th>
        </tr>
    </thead>
    <tbody className={css.tableTbody}> 
        {items.map(item => (
            <tr key={item.id}>
                <TransactionRow
                    type={item.type}
                    amount={item.amount}
                    currency={item.currency}
                />
            </tr>
        ))}
    </tbody>
</table>
)

const TransactionRow = ({ type, amount, currency }) => (
    <>
    <td className={css.tableTdElement}>{type}</td>
    <td className={css.tableTdElement}>{amount}</td>
    <td className={css.tableTdElement}>{currency}</td>
    </>
)

export default TransactionHistory
import { TransactionItemString } from "./TransactionItem.styled"

export function TransactionItem({ amount, type, currency }) {
    return (<>
        <TransactionItemString>{type}</TransactionItemString>
        <TransactionItemString >{amount}</TransactionItemString>
        <TransactionItemString>{ currency}</TransactionItemString>
    </>)
}
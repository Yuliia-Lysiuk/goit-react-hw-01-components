import { TransactionItem } from "../TransactionItem/TransactionItem";
import PropTypes from 'prop-types';
import { TransactionHistoryTable, Title, TransactionElement } from "./TransactionHistory.styled";

export const TransactionHistory = ({ items }) => {
    
    return (<TransactionHistoryTable>
  <thead>
    <tr>
      <Title>Type</Title>
      <Title>Amount</Title>
      <Title>Currency</Title>
    </tr>
  </thead>

        <tbody>
            {
        items.map(item => (
        
            <TransactionElement key={item.id} type={item.type}>
                        <TransactionItem
                            type={item.type}
                            amount={item.amount}
                            currency={item.currency}  
                />
            </TransactionElement>
        ))}
            </tbody>
</TransactionHistoryTable>)
}

 TransactionHistory.propTypes = {
 
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};
import propTypes from "prop-types";
import { TransactionsPoint } from "./TransactionsPoint";
import style from "./transactions.module.css";

export const TransactionsHistory = ({ item }) => {
  return (
    <table className={style.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {item.map(({ id, type, amount, currency }) => (
          <TransactionsPoint
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </table>
  );
};

TransactionsHistory.propTypes = {
  item: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string,
      type: propTypes.string,
      amount: propTypes.string,
      currency: propTypes.string,
    })
  ),
};

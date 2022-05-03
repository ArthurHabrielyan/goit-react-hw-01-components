import propTypes from "prop-types";
import style from "./transactions.module.css";

export const TransactionsPoint = ({ type, amount, currency }) => {
  return (
    <tr className={style.item}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

TransactionsPoint.propType = {
  type: propTypes.string,
  amount: propTypes.string,
  currency: propTypes.string,
};

//

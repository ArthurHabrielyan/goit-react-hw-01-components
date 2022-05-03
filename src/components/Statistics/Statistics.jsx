import propTypes from "prop-types";
import style from "./statistics.module.css";
import { getRandomHexColor } from "./GetRandomColor";

export const Statistics = ({ stats, title }) => {
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}

      <ul className={style.stat__list}>
        {stats.map(({ label, percentage, id }) => (
          <li
            style={{ backgroundColor: getRandomHexColor() }}
            className={style.item}
            key={id}
          >
            <span className={style.label}> {label}</span>
            <span className={style.percentage}> {percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.protTypes = {
  title: propTypes.string,
  stats: propTypes.arrayOf(
    propTypes.shape({
      label: propTypes.string,
      percentage: propTypes.number,
      id: propTypes.string,
    })
  ),
};

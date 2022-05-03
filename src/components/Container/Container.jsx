import s from "./container.module.css";

export const Container = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

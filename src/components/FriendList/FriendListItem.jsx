import propTypes from "prop-types";
import style from "./FriendList.module.css";

export const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <li className={style.item}>
      {isOnline ? (
        <span className={style.isOnline}></span>
      ) : (
        <span className={style.isOffline}></span>
      )}

      <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={style.name}> {name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  isOnline: propTypes.bool,
  avatar: propTypes.string,
  id: propTypes.number,
  name: propTypes.string,
};

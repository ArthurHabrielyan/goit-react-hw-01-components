import { FriendListItem } from "./FriendListItem";
import propTypes from "prop-types";
import style from "./FriendList.module.css";

export const FriendList = ({ friends }) => {
  return (
    <ul className={style.friend_list}>
      {friends.map(({ name, isOnline, avatar, id }) => (
        <FriendListItem
          name={name}
          isOnline={isOnline}
          avatar={avatar}
          key={id}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string,
      isOnline: propTypes.bool,
      avatar: propTypes.string,
      id: propTypes.number,
    })
  ),
};

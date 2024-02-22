import clsx from "clsx";
import css from './FriendList.module.css';

const FriendList = ({ friends }) => (
    <ul className={css.friendList}>
    {friends.map(friend => (
      <li key={friend.id}>
        <FriendListItem
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}/>
      </li>
    ))}
  </ul>
)

const FriendListItem = ({ avatar, name, isOnline = false }) => (
<div className={clsx(css.friendCard, {
        [css.cardStatus]: isOnline,
      })}>
  <img className={css.friendImg} src={avatar} alt={name} width="48" />
  <p className={css.friendName}>{name}</p>
  <p className={css.friendStatus}>{isOnline ? "Online" : "Offline"}</p>
</div>
)

export default FriendList

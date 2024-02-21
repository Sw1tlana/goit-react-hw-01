import css from './FriendList.module.css'
const FriendList = ({ friends }) => (
    <ul className={css.friendList}>
    {friends.map(friend => (
      <li className={css.friendListItem} key={friend.id}>
        <FriendListItem
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}/>
      </li>
    ))}
  </ul>
)
const FriendListItem = ({ avatar, name, isOnline }) => (
<div className={css.friendContainer}>
  <img className={css.friendImg} src={avatar} alt={name} width="48" />
  <p>{name}</p>
  <p>{isOnline ? "Online" : "Offline"}</p>
</div>
)

export default FriendList

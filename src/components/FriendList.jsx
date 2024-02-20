const FriendList = ({ friends }) => (
    <ul>
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
const FriendListItem = ({ avatar, name, isOnline }) => (
<div>
  <img src={avatar} alt={name} width="48" />
  <p>{name}</p>
  <p>{isOnline ? "Online" : "Offline"}</p>
</div>
)

export default FriendList

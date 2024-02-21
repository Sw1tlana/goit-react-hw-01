import css from './Profile.module.css';
const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => {
  return (
  <div className={css.profile}>
  <div className={css.profileAvatarInfo}>
    <img
      className={css.profileImg}
      width={250}
      src={avatar}
      alt={username}
    />
    <p className={css.profileName}>{username}</p>
    <p className={css.profileTextInfo}>{tag}</p>
    <p className={css.profileTextInfo}>{location}</p>
  </div>

  <ul className={css.profileList}>
    <li className={css.profileListItem}>
      <span className={css.profileSubtext}>Followers: </span>
      <span className={css.profileNumber}>{followers}</span>
    </li>
    <li className={css.profileListItem}>
      <span className={css.profileSubtext}>Views: </span>
      <span className={css.profileNumber}>{views}</span>
    </li>
    <li className={css.profileListItem}>
      <span className={css.profileSubtext}>Likes: </span>
      <span className={css.profileNumber}>{likes}</span>
    </li>
  </ul>
</div>
  )
}

export default Profile

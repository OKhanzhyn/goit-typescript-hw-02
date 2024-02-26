import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
    // console.log(friends)
  return (
    <div className={css.friendCard}>
    <img className={css.friendAva} src={avatar} alt="Avatar" width="48" />
    <p className={css.friendName}> {name}</p>
    <p className={css.friendIsOnline}> {isOnline ? <span className={css.friendIsOnlineTrue}>Online</span> : <span className={css.friendIsOnlineFalse}>Offline</span>}</p>
    </div>
  )
}

export default FriendListItem;

// {avatar, name, isOnline = true, id}
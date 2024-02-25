// import css from './FriendListItem.module.css'

const FriendListItem = (friends) => {
  return (
    <div>
    <img src={friends.avatar} alt="Avatar" width="48" />
    <p>{friends.name}</p>
    <p>{friends.isOnline ? <span>Online</span> : <span>Offline</span>}</p>
    </div>
  )
}

export default FriendListItem;

// {avatar, name, isOnline = true, id}
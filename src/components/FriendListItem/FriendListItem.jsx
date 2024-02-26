// import css from './FriendListItem.module.css'

const FriendListItem = ({ avatar, name, isOnline }) => {
    // console.log(friends)
  return (
    <div>
    <img src={avatar} alt="Avatar" width="48" />
    <p>{name}</p>
    <p>{isOnline ? <span>Online</span> : <span>Offline</span>}</p>
    </div>
  )
}

export default FriendListItem;

// {avatar, name, isOnline = true, id}
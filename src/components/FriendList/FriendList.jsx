// import css from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
    console.log(friends)
     return (
<div>
<ul>
    {friends.map((item) => {
        console.log(item)
       return  <li key={item.id}>
            <FriendListItem avatar={item.avatar} name={item.name} isOnline={item.isonline}/>
            </li> 
        })}
</ul>
</div>
  );
};

export default FriendList;

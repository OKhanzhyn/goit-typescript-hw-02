import css from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
    
    return (
<div className={css.friendListCont}>
<ul className={css.friendListBox}>

    {friends.map((item) => {
    return  <li key={item.id}>
            <FriendListItem avatar={item.avatar} name={item.name} isOnline={item.isOnline}/>
            </li> 
        })}
</ul>
</div>
  );
};

export default FriendList;

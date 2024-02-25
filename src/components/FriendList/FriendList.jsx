// import css from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  return (
<div>
<ul>

    {[...friends].map((friend) => {
        return (
            <li key={friend.id}>
            <FriendListItem />
            </li> )
         })}
   
 </ul>
</div>
  );
};

export default FriendList;

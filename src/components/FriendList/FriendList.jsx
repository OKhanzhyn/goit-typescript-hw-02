// import css from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
    console.log(friends)
     return (
<div>
<ul>
    {[{friends}].map((item) => {
        console.log(item)
       return  <li key={item.id}>
            <FriendListItem />
            </li> 
        })}
</ul>
</div>
  );
};

export default FriendList;

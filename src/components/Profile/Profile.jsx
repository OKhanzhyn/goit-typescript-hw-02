// rafce - сніпет
import './ProfileStyles.css';

const Profile = (props) => {
  return ( 
  <div className="profCard">
  <div className='profCardUserData'>
    <img className='profCardImg'
      src={props.image}
      alt="User avatar"
    />
    <p className='profCardName'>{props.name}</p>
    <p className='profcardTag'>@{props.tag}</p>
    <p className='profCardLocation'>{props.location}</p>
  </div>

  <ul className='profCardStats'>
    <li className='profCardStatsItem'>
      <span className='profCardStatsItemName'>Followers</span>
      <span className='profCardStatsItemValue'>{props.stats.followers}</span>
    </li>
    <li className='profCardStatsItem'>
      <span className='profCardStatsItemName'>Views</span>
      <span className='profCardStatsItemValue'>{props.stats.views}</span>
    </li>
    <li className='profCardStatsItem'>
      <span className='profCardStatsItemName'>Likes</span>
      <span className='profCardStatsItemValue'>{props.stats.likes}</span>
    </li>
  </ul>
  </div>
     ); 
};

export default Profile;
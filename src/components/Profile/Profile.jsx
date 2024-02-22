// rafce - сніпет
import css from './Profile.module.css';

const Profile = (props) => {
  
  return ( 
  <div className={css.profCard}>
  <div className={css.profCardUserData}>
    <img className={css.profCardImg}
      src={props.image}
      alt="User avatar"
    />
    <p className={css.profCardName}>{props.name}</p>
    <p className={css.profcardTag}>@{props.tag}</p>
    <p className={css.profCardLocation}>{props.location}</p>
  </div>

  <ul className={css.profCardStats}>
    <li className={css.profCardStatsItem}>
      <span className={css.profCardStatsItemName}>Followers</span>
    <span className={css.profCardStatsItemValue}>{props.stats.followers}</span>
    </li>
    <li className={css.profCardStatsItem}>
      <span className={css.profCardStatsItemName}>Views</span>
    <span className={css.profCardStatsItemValue}>{props.stats.views}</span>
    </li>
    <li className={css.profCardStatsItem}>
      <span className={css.profCardStatsItemName}>Likes</span>
      <span className={css.profCardStatsItemValue}>{props.stats.likes}</span>
    </li>
  </ul>
  </div>
     ); 
};

export default Profile;
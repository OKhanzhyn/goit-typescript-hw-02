import css from './Contact.module.css';
import { BsPersonFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ( userContact ) => {
  console.log(userContact)
  return (    
    <ul className={css.contact}>
      <li className={css.userInfo}>
        <span className={css.userItem}><BsPersonFill className={css.icon}/> {userContact.name}</span>
        <span className={css.userItem}><FaPhoneAlt className={css.icon}/> {userContact.number}</span>
      </li>
      <li>
        <button>Delete</button>
      </li>
    </ul>
  )
}

export default Contact

// {userData.name}
// {userData.number}
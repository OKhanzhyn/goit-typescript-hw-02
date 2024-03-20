import css from './Contact.module.css';
import { BsPersonFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ( contacts, deleteContact ) => {
  console.log(contacts)
  return (    
    <ul className={css.contact}>
      <li className={css.userInfo}>
        <span className={css.userItem}><BsPersonFill className={css.icon}/> {contacts.name}</span>
        <span className={css.userItem}><FaPhoneAlt className={css.icon}/> {contacts.number}</span>
      </li>
      <li>
        <button onClick={() => deleteContact(contacts.id)}>Delete</button>
      </li>
    </ul>
  )
}

export default Contact


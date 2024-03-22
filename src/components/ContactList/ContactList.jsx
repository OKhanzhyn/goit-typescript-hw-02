import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

const ContactList = ({ users, deleteContact }) => {
  console.log(users)
  return (
    <ul className={css.contactList}>

       {users.map((item) => {
        return <li key={item.id}>
                  <Contact
                  contact={item}
                  deleteContact={deleteContact}
                  />
               </li>
           })}
    </ul>  
    )  
}

export default ContactList

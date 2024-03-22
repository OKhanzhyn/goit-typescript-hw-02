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
                  // addContact={addContact}
                  />
               </li>
           })}
    </ul>  
    )  
}

export default ContactList

// userContact
// userData={userData}
// name={item.name}
// number={item.number}
// console.log(contacts)
// console.log(users)
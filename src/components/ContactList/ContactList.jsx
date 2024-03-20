import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

const ContactList = ({ contacts }) => {
 console.log(contacts)
  return (
    <ul className={css.contactList}>

       {contacts.map((item) => {
        return <li key={item.id}>
                  <Contact
                  name={item.name}
                  number={item.number}
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
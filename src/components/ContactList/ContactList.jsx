import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

const ContactList = ({ userContact }) => {
 console.log(userContact)
  return (
    <ul className={css.contactList}>

       {userContact.map((item) => {
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
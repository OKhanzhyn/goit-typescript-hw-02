// rafce - сніпет
import css from './App.module.css';
import SearchBox from '../SearchBox/SearchBox'
import ContactForm from "../ContactForm/ContactForm";
import ContactList from '../ContactList/ContactList';
import { useEffect, useState } from 'react';
// import { nanoid } from 'nanoid';

// model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"

const userData = [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]
const App = () => {    
  const [inputValue, setInputValue] = useState(""); /*searchBox*/

   const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("savedContacts");
    if (!savedContacts) return userData;
    const parsedContacts = JSON.parse(savedContacts);
    return parsedContacts;
   });  
   useEffect(() => {
    localStorage.setItem("saved-contacts", JSON.stringify(contacts));
   }, [contacts]);
     
/*searchBox*/
const handleChange = (value) => {   
  setInputValue(value)   
  };
const getVisibleContacts = () => {    
    return contacts.filter(({ name }) => name.toLowerCase().includes(inputValue.toLowerCase().trim()));
};
/* contact deleting */
const deleteContact = deletedId => {
  setContacts(prev => prev.filter(({ id }) => id !== deletedId));
 };

  return (
    <div className={css.pageStyle}>
      <h1 className={css.formTitle}>Phonebook</h1>
      <ContactForm />
      <SearchBox 
      handleChange={handleChange}
      inputValue={inputValue}/>
      <ContactList 
      userData={userData}
      inputValue={inputValue}
      contacts={getVisibleContacts()}
      deleteContact={deleteContact}
      />      
    </div>
  );};
export default App

//  const handleDelete = (contactId) => {
//   setContacts((prevState) => prevState.filter((contact) => contact.id !== contactId));
//  }
// setInputValue(evt.target.value);
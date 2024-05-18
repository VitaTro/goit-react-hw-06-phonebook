import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import css from './App.module.css';
import { ContactAdd } from './ContactAdd/ContactAdd';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { getContacts } from './redux/state';

const Key = 'Contacts';

export const App = () => {
  const contacts = useSelector(getContacts);
  // const [contacts, setContacts] = useState([]);
  const isMounted = useRef(false);
  // const Key = 'Contacts';

  // useEffect(() => {
  //   const savedContacts = JSON.parse(localStorage.getItem(Key));
  //   savedContacts && setContacts([...savedContacts]);
  // }, []);

  useEffect(() => {
    if (isMounted.current) {
      localStorage.setItem(Key, JSON.stringify(contacts));
    } else {
      isMounted.current = true;
    }
  }, [contacts]);

  // const checkContact = newContact => {
  //   const isInBase = contacts.some(
  //     contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
  //   );
  //   return isInBase;
  // };
  // const addNewContact = newContact => {
  //   const check = checkContact(newContact);
  //   if (!check) {
  //     let actualContacts = contacts;
  //     actualContacts.push(newContact);
  //     setContacts([...actualContacts]);
  //     // const updatedContacts = [...contacts, newContact];
  //     // setContacts(updatedContacts);
  //   } else {
  //     alert(`${newContact.name} is already in contacts`);
  //   }
  // };

  // const deleteUser = e => {
  //   const index = contacts.findIndex(contact => contact.id === e.target.id);
  //   if (index !== -1) {
  //     const updatedContacts = [...contacts];
  //     updatedContacts.splice(index, 1);
  //     setContacts(updatedContacts);
  //   } else {
  //     alert(`Contact ${e.target.id} not found.`);
  //   }
  // };
  return (
    <div className={css.primary}>
      <h1 className={css.header}> Phonebook </h1>
      <ContactAdd />
      <h2 className={css.header}> Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

import { deleteContact } from 'components/redux/contactsSlice';
import { getContacts } from 'components/redux/state';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  // const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  // const filteredContacts = contacts.filter(contact => {
  //   const nameMatches = contact.name
  //     ?.toLowerCase()
  //     .includes(filter?.toLowerCase());
  //   const numberMatches = contact.number
  //     ?.toLowerCase()
  //     .includes(filter?.toLowerCase());

  //   // додаю перевірку на існування властивостей contact.name та
  //   // contact.number, щоб уникнути помилки
  //   // “Uncaught TypeError: Cannot read properties of undefined”.
  //   return nameMatches || numberMatches;
  // });
  return (
    <div className={css.primary}>
      <ul className={css.list}>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name} : {contact.number}{' '}
            <button
              id={contact.id}
              onClick={() => handleDelete(contact.id)}
              className={css.button}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   deleteFunction: PropTypes.func.isRequired,
// };
// export default ContactList;

import { deleteContact } from 'components/redux/contactsSlice';
import { getContacts, getFilter } from 'components/redux/state';
import { useState } from 'react'; // Додавання useState
import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';

export const ContactList = () => {
  const allContacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const [filteredContacts, setFilteredContacts] = useState(allContacts);

  const handleDelete = id => {
    dispatch(deleteContact(id));
    // ContactList.reset();
    // dispatch(allContacts);
  };
  const handleFilterChange = event => {
    const searchValue = event.target.value.toLowerCase();
    const filtered = allContacts.filter(contact => {
      const nameMatches = contact.name?.toLowerCase().includes(searchValue);
      const numberMatches = contact.number?.toLowerCase().includes(searchValue);
      return nameMatches || numberMatches;
    });
    setFilteredContacts(filtered);
  };

  return (
    <div className={css.primary}>
      <div className={css.container}>
        <label className={css.label}>Find contacts by Name</label>
        <div>
          <input
            className={css.input}
            type="text"
            placeholder="Search..."
            value={filter}
            onChange={handleFilterChange}
          />
        </div>
      </div>
      <ul className={css.list}>
        {filteredContacts.map(contact => (
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

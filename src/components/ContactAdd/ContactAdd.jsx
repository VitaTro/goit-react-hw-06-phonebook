// import PropTypes from 'prop-types';
import { addContact } from 'components/redux/contactsSlice';
import { getContacts } from 'components/redux/state';
import { useDispatch, useSelector } from 'react-redux';
import css from './ContactAdd.module.css';

export const ContactAdd = () => {
  const dispatch = useDispatch();
  const allContacts = useSelector(getContacts);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    // const id = nanoid();
    // props.onSubmit({ id, name, number });
    const isInBase = allContacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (!isInBase) {
      dispatch(addContact(name, number));
      const updatedContacts = [...allContacts, { name, number }];
      localStorage.setItem('Contacts', JSON.stringify(updatedContacts));
      // dispatch(updateContacts(updatedContacts));
      form.reset();
    } else {
      alert(`${name} is use. Try another name.`);
    }
  };

  return (
    <div className={css.primary}>
      <form onSubmit={handleSubmit} className={css.form}>
        <div className={css.container}>
          <label htmlFor="user-name" className={css.label}>
            Name
          </label>
          <div>
            <input
              className={css.input}
              type="text"
              name="name"
              pattern="/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)$/"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </div>
        </div>

        <div className={css.container}>
          <label htmlFor="number" className={css.label}>
            Number
          </label>
          <div>
            <input
              className={css.input}
              type="tel"
              name="number"
              pattern="/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </div>
        </div>
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </form>
    </div>
  );
};

// ContactAdd.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
// export default ContactAdd;

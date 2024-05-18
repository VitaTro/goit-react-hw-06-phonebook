import PropTypes from 'prop-types';
import Contact from './Contact/Contact';
import css from './ContactList.module.css';

const ContactList = ({ contacts, deleteFunction }) => {
  return (
    <div className={css.primary}>
      <ul className={css.list}>
        {contacts.map(contact => (
          <Contact key={contact.id}>
            {contact.name} : {contact.number} {''}
            <button
              id={contact.id}
              onClick={deleteFunction}
              className={css.button}
            >
              Delete
            </button>
          </Contact>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteFunction: PropTypes.func.isRequired,
};
export default ContactList;

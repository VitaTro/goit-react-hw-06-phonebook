import PropTypes from 'prop-types';

export const Contact = ({ children }) => {
  return <li> {children} </li>;
};

Contact.propTypes = {
  children: PropTypes.node.isRequired,
};

// export default Contact;

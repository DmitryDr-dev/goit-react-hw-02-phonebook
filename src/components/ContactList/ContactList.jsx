import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem/ContactListItem';

function ContactList({ contacts }) {
  return (
    <ul className="contacts">
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className="contacts__item">
            <ContactListItem contactName={name} contactNumber={number} />;
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default ContactList;

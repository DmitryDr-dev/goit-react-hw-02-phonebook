import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem/ContactListItem';
import s from './ContactList.module.css';

function ContactList({ contacts, onDelete }) {
  return (
    <ul className={s.contacts}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={s.contactsItem}>
            <ContactListItem
              contactName={name}
              contactNumber={number}
              id={id}
              onDelete={onDelete}
            />
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

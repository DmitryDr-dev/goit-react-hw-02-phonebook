import PropTypes from 'prop-types';

function ContactListItem({ id, contactName, contactNumber, onDelete }) {
  return (
    <span>
      {contactName}: {contactNumber}
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </span>
  );
}

ContactListItem.propTypes = {
  contactName: PropTypes.string.isRequired,
  contactNumber: PropTypes.string.isRequired,
};

export default ContactListItem;

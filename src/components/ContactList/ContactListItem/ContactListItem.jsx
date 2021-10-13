import PropTypes from 'prop-types';

function ContactListItem({ contactName, contactNumber }) {
  return (
    <span>
      {contactName}: {contactNumber}
    </span>
  );
}

ContactListItem.propTypes = {
  contactName: PropTypes.string.isRequired,
  contactNumber: PropTypes.string.isRequired,
};

export default ContactListItem;

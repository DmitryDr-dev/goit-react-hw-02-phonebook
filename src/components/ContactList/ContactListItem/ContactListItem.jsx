import PropTypes from 'prop-types';
import s from './ContactListItem.module.css';

function ContactListItem({ id, contactName, contactNumber, onDelete }) {
  return (
    <span className={s.contactWrap}>
      <span>
        <span className={s.contactName}>{contactName}:</span>
        <span className={s.contactNumber}>{contactNumber}</span>
      </span>
      <button
        className={s.contactDeleteBtn}
        type="button"
        onClick={() => onDelete(id)}
      >
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

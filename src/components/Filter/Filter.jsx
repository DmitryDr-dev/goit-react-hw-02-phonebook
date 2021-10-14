import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import s from './Filter.module.css';

function Filter({ value, onChange }) {
  const filterInputId = uuidv4();

  return (
    <div className={s.Filter}>
      <label className={s.FilterLabel} htmlFor={filterInputId}>
        Filter by Name
      </label>
      <input
        className={s.FilterInput}
        type="text"
        value={value}
        onChange={onChange}
        id={filterInputId}
      />
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;

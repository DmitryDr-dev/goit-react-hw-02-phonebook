import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
function Filter({ value, onChange }) {
  const filterInputId = uuidv4();

  return (
    <div>
      <label htmlFor={filterInputId}>Filter by Name</label>
      <input type="text" value={value} onChange={onChange} id={filterInputId} />
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;

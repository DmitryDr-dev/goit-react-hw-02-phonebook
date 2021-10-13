import PropTypes from 'prop-types';

function Filter({ value, onChange }) {
  return (
    <label>
      Filter by Name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;

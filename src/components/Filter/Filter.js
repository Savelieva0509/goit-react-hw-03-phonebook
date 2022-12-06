import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <div className={css.filter}>
    <label for="user-text" className={css.filter__label}>
      Find contact by name
    </label>

    <input
      className={css.filter__input}
      type="text"
      value={value}
      onChange={onChange}
      name="user-text"
    />
  </div>
);

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

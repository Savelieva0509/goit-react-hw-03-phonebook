import IconButton from 'components/IconButton/IconButton';
import PropTypes from 'prop-types';
import css from './ContactItem.module.css';
import { ReactComponent as DeleteIcon } from '../icons/delete.svg';

const ContactItem = ({ id, name, number, onDeleteContact }) => (
  <li key={id} className={css.contactsList__item}>
    <p>
      {name}: {number}
    </p>

    <IconButton className={css.contactsList__button} onClick={onDeleteContact}>
      <DeleteIcon
        className={css.deleteIcon}
        width="20"
        height="20"
        fill="#fff"
      />
      Delete
    </IconButton>
  </li>
);

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;

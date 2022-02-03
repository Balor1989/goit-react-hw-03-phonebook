import propTypes from 'prop-types';
import s from './Contacts.module.css';

const Contacts = ({ contacts, onDeleteContactCard }) => (
  <>
    <ul className={s.cardList}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.cardBox} key={id}>
          <p className={s.cardValues}>
            {name}: {number}
          </p>
          <div className={s.buttonBox}>
            <button
              className={s.deleteButton}
              onClick={() => onDeleteContactCard(id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  </>
);

export default Contacts;

Contacts.propTypes = {
  contacts: propTypes.array,
  onDeleteContactCard: propTypes.func,
};

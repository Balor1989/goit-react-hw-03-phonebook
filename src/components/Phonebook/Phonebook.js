import { Component } from 'react/cjs/react.production.min';
import { BsFillTelephonePlusFill } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import s from './Phonebook.module.css';

class Phonebook extends Component {
  state = {
    name: '',
    number: '',
  };

  formSubmit = e => {
    e.preventDefault();
    this.props.onAddContactCard(this.state);
  };

  inputName = e => {
    this.setState({ name: e.target.value });
    console.log(e.target.value);
  };

  inputNumber = e => {
    this.setState({ number: e.target.value });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <h2 className={s.phonebookTitle}>
          Phonebook
          <IconContext.Provider
            value={{
              color: 'rgb(198, 131, 204)',
              size: '25px',
              style: { margin: '0 0 0 15px' },
            }}
          >
            <BsFillTelephonePlusFill />
          </IconContext.Provider>
        </h2>
        <form className={s.phonebookForm} onSubmit={this.formSubmit}>
          <div className={s.inputBox}>
            <label className={s.label}>Name</label>
            <input
              className={s.input}
              value={name}
              onChange={this.inputName}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </div>
          <div className={s.inputBox}>
            <label className={s.label}>Number</label>
            <input
              className={s.input}
              value={number}
              onChange={this.inputNumber}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </div>
          <div className={s.buttonBox}>
            <button className={s.deleteButton} type="submit">
              Add contact
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default Phonebook;

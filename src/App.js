import s from './App.module.css';
import { Component } from 'react/cjs/react.production.min';
import Contacts from './Contacts/Contacts';
import Phonebook from './Phonebook/Phonebook';
import shortid from 'shortid';
import Filter from './Filter';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import contacts from './Contacts/contacts.json';

class App extends Component {
  state = {
    contacts: contacts,
    filter: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts);
    if (!contacts) {
      return;
    }
    this.setState({ contacts: parseContacts });
  }

  addContactCard = values => {
    const { contacts } = this.state;
    const repeatName = contacts.find(contact => {
      return contact.name.toLowerCase() === values.name.toLowerCase();
    });
    if (repeatName) {
      Notify.warning(`${values.name} is already in contacts`);
      return;
    }

    const contact = {
      id: shortid.generate(),
      name: values.name,
      number: values.number,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
    values.name = '';
    values.number = '';
    Notify.success(`${values.name} is added in contacts`);
  };

  deleteContactCard = cardId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== cardId),
    }));
  };

  filterChange = e => {
    this.setState({ filter: e.target.value });
    console.log(e.target.value);
  };

  render() {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();
    const visibleContactCards = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );

    return (
      <section className={s.phonebookSection}>
        <Phonebook onAddContactCard={this.addContactCard} />
        <Filter onFilterChange={this.filterChange} value={filter} />
        <Contacts
          contacts={visibleContactCards}
          onDeleteContactCard={this.deleteContactCard}
        />
      </section>
    );
  }
}

export default App;

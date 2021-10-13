import { Component } from 'react';

import AddContactForm from './components/AddContactForm/AddContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

class App extends Component {
  constructor() {
    super();

    // should be empty array
    // ! use several contacts to check functions
    this.state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
    };
  }

  // method to process data sent on form submission
  formSubmitHandler = state => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, state],
      };
    });
  };

  // method to detect changes in Filter input
  changeFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { filter } = this.state;

    return (
      <div>
        <AddContactForm onSubmit={this.formSubmitHandler} />
        <ContactList contacts={this.getFilteredContacts()} />
        <Filter value={filter} onChange={this.changeFilter} />
      </div>
    );
  }
}

export default App;

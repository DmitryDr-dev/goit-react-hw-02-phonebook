import { Component } from 'react';

import AddContactForm from './components/AddContactForm/AddContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import Section from './components/Section/Section';

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
  formSubmitHandler = newContact => {
    this.setState(prevState => {
      const normalizedName = newContact.name.toLowerCase();

      if (
        prevState.contacts.find(
          contact => contact.name.toLowerCase() === normalizedName,
        )
      ) {
        alert(`${newContact.name} already exists!`);
        return;
      }

      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  //
  onDeleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId,
        ),
      };
    });
  };

  // method to detect changes in Filter input
  changeFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  //
  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const {
      state: { filter },
      formSubmitHandler,
      getFilteredContacts,
      changeFilter,
    } = this;

    return (
      <div>
        <h1>Phonebook</h1>
        <AddContactForm onSubmit={formSubmitHandler} />
        <Section title="Contacts">
          <ContactList
            contacts={getFilteredContacts()}
            onDelete={this.onDeleteContact}
          />
          <Filter value={filter} onChange={changeFilter} />
        </Section>
      </div>
    );
  }
}

export default App;

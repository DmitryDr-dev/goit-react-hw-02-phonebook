import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class AddContactForm extends Component {
  constructor() {
    super();

    this.state = {
      id: '',
      name: '',
      number: '',
    };
  }

  // unique ids for name & tel
  nameInputId = uuidv4();
  telInputId = uuidv4();

  // method to update state
  handleInputChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  // method to send current state back to parent
  handleSubmit = e => {
    e.preventDefault();

    this.setState({ id: uuidv4() });

    this.props.onSubmit(this.state);
  };

  // method to clear state
  resetState = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>Имя</label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          id={this.nameInputId}
          onChange={this.handleInputChange}
        />
        <label htmlFor={this.telInputId}>Телефон</label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          id={this.telInputId}
          onChange={this.handleInputChange}
        />
        <button type="submit">Add Contact</button>
      </form>
    );
  }
}

export default AddContactForm;

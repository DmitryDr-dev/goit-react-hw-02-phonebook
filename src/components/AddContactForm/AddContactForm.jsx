import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import s from './AddContactForm.module.css';
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

    const { props, state } = this;

    const newContact = { ...state, id: uuidv4() };

    props.onSubmit(newContact);

    this.resetState();
  };

  // method to clear state
  resetState = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const {
      handleSubmit,
      handleInputChange,
      nameInputId,
      telInputId,
      state: { name, number },
    } = this;

    return (
      <form onSubmit={handleSubmit} className={s.addContactForm}>
        <label htmlFor={nameInputId} className={s.addContactFormLabel}>
          Имя
        </label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          id={nameInputId}
          value={name}
          onChange={handleInputChange}
          className={s.addContactFormInput}
        />
        <label htmlFor={telInputId} className={s.addContactFormLabel}>
          Телефон
        </label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          id={telInputId}
          value={number}
          onChange={handleInputChange}
          className={s.addContactFormInput}
        />
        <button type="submit" className={s.addContactFormBtn}>
          Add Contact
        </button>
      </form>
    );
  }
}

export default AddContactForm;

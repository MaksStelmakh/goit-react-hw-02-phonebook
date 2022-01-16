import React from "react";

export default class App extends React.Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };

  searchMethod = (evt) => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((filter) =>
      filter.name.toLowerCase().includes(normalizedFilter)
    );
  };

  addName = (event) => {
    this.setState({
      name: event.currentTarget.value,
    });
  };

  addNumber = (event) => {
    this.setState({
      number: event.currentTarget.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    const filteredContacts = this.getVisibleContacts();
    const {
      filter,
      contacts: { name, number },
    } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.addName}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.addNumber}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="submit">Add contact</button>
        </form>
        <div>
          <h2>Contacts</h2>
          <label>
            Find contacts by name
            <input
              type="text"
              name="found"
              value={filter}
              onChange={this.searchMethod}
            />
          </label>
          <ul>
            {filteredContacts.map((contact) => {
              return (
                <li key={contact.id}>
                  <p>
                    {contact.name}: <span>{contact.number}</span>
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

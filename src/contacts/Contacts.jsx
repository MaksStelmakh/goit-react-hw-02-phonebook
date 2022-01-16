import { List } from "./Contacts.styled";

export default function Contacts({ filter, deleteElem }) {
  return (
    <List>
      {filter.map((contact) => {
        return (
          <li key={contact.id}>
            <p>
              {contact.name}: <span>{contact.number}</span>
            </p>
            <button
              type="button"
              onClick={() => deleteElem(contact.id)}
            ></button>
          </li>
        );
      })}
    </List>
  );
}

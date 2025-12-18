import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

export default function ContactList({ contacts, getContactId }) {
  console.log(getContactId);
 
  const renderedContactList = contacts.map((contact) => {
    return (
        
      <ContactCard
        key={contact.id}
        contacts={contact}
        clickHandler={getContactId}
      />
      
    );
  });
  console.log(renderedContactList);

  return (
    <div className="ui celled list" style={{ marginTop: "80px" }}>
        <h1>Contct List</h1>
        <Link to="/add">
        <button className="ui button blue " style={{ marginBottom: "20px" }}>Add Contacts</button>
        </Link>
        <div className="ui divider"></div>
  <div >{renderedContactList}</div>
  </div>

  )
}

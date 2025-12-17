import { useEffect, useState } from "react";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import Header from "./components/Header";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  // const contacts=[
  //   {id:"1",
  //     name:"Rajia",
  //     email:"rajia@gmail.com"
  //   },
  //   {id:"2",
  //     name:"Asif",
  //     email:"asif@gmail.com"
  //   }
  // ]

  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
  });
  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { ...contact, id: uuidv4() }]);
  };

  // For deleting contacts
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };
  // for storing this contact data list
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      {/* here addContactHandler used to pass data from addContact to app.jsx */}
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
    </div>
  );
}

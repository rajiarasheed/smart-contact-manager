import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import Header from "./components/Header";
import { v4 as uuidv4 } from "uuid";
import api from "./api/contacts";
import ContactDetails from "./components/ContactDetails";
import DeleteContact from "./components/DeleteContact";
import EditContact from "./components/EditContact";

export default function App() {
  // const LOCAL_STORAGE_KEY = "contacts";

  // const [contacts, setContacts] = useState(() => {
  //   if (!localStorage.getItem("appInitialized")) {
  //     localStorage.removeItem(LOCAL_STORAGE_KEY);
  //     localStorage.setItem("appInitialized", "true");
  //     return [];
  //   }
  //   // return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
  // });
  const [contacts, setContacts] = useState([]);
  const retrieveContact = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  const addContactHandler = async(contact) => {
    const request={ ...contact, id: uuidv4() }
    const response= await api.post("/contacts",request)
    setContacts((prev) => [...prev, response]);
  };

  const updateContactHandler=async(contact)=>{
    const response=await api.put(`/contacts/${contact.id}`,contact);
    console.log("f",response);
    const {id,name,email}=response.data;
    setContacts(contacts.map((contact)=>{
      return contact.id === id ? {...response.data} : contact
      
    }))
    
  }

  const removeContactHandler = async(id) => {
    await api.delete(`/contacts/${id}`)
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  // LOAD contacts once
  useEffect(() => {
    const getAllContacts = async () => {
      const allContact = await retrieveContact();
      console.log("API response:", allContact);

      if (allContact) setContacts(allContact);
    };
    getAllContacts();
  }, []);
  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div className="ui container">
      <Router>
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <ContactList
                contacts={contacts}
                getContactId={removeContactHandler}
              />
            }
          />
          <Route
            path="/add"
            element={<AddContact addContactHandler={addContactHandler} />}
          />
          <Route path="/contacts/:id" element={<ContactDetails />} />
          <Route
            path="/delete"
            element={
              <DeleteContact removeContactHandler={removeContactHandler} />
            }
          />
          <Route
            path="/edit"
            element={
              <EditContact updateContactHandler={updateContactHandler} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

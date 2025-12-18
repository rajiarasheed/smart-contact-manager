import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import Header from "./components/Header";
import { v4 as uuidv4 } from "uuid";
import ContactDetails from "./components/ContactDetails";
import DeleteContact from "./components/DeleteContact";

export default function App() {
  const LOCAL_STORAGE_KEY = "contacts";

  const [contacts, setContacts] = useState(() => {
    if (!localStorage.getItem("appInitialized")) {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
      localStorage.setItem("appInitialized", "true");
      return [];
    }
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
  });

  const addContactHandler = (contact) => {
    setContacts((prev) => [...prev, { ...contact, id: uuidv4() }]);
  };

  const removeContactHandler = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

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
          <Route
          path="/contacts/:id"
          element={<ContactDetails />}
          />
          <Route
          path="/delete"
          element={<DeleteContact removeContactHandler={removeContactHandler} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

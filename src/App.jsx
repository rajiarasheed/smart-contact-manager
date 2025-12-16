import { useState } from "react";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import Header from "./components/Header";

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
  const [contacts,setContacts]=useState([])
  const addContactHandler=(contact)=>{
    console.log(contact);
    
  }
  return (
    <div className="ui container">
      <Header />
      {/* addContactHandler used to pass data from addContact to app.jsx */}
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} />
    </div>
  )
}



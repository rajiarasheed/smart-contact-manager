import ContactCard from "./ContactCard";

export default function ContactList({contacts}){
    console.log(contacts);
    const renderedContactList= contacts.map((contact)=>{
        return(
            <ContactCard contacts={contact}/>
        )
    }
    )
    console.log(renderedContactList);
    
    return(
        <div className="ui celled list">
        {renderedContactList}
        </div>
    )
}
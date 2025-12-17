import ContactCard from "./ContactCard";

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

  return <div className="ui celled list">{renderedContactList}</div>;
}

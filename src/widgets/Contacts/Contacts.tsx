import { contacts } from "../../lib";
import { Card } from "../../ui/Card";
import styles from './Contacts.module.css'

export const Contacts = () => {
  const contactsStyles = {
    padding: "5px",
    backgroundColor: "#f0fdc1",
    width: "990px",
    height: '150px',
    margin: "auto",
  };

  const listContacts = contacts.map((el) => (
    <li key={el.id}>
      {el.info}: {el.value}
    </li>
  ));

  return (
    <div>
      <Card
        title="Контакты"
        content={<ul className={styles.contactsList}>{listContacts}</ul>}
        addStyles={contactsStyles}
      />
    </div>
  );
};

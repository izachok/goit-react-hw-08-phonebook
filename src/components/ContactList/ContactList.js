import { contactsOperations, contactsSelectors } from 'redux/contacts';
import { useDispatch, useSelector } from 'react-redux';

import ContactItem from 'components/ContactItem';
import s from './ContactList.module.css';
import { useEffect } from 'react';

export default function ContactList() {
  const contacts = useSelector(contactsSelectors.getFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <ul className={s.list}>
      {contacts.length > 0 &&
        contacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
    </ul>
  );
}

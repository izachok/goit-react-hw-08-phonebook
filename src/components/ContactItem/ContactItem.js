import FormButton from '../FormButton';
import { MdDelete } from 'react-icons/md';
import { contactsOperations } from 'redux/contacts';
import s from './ContactItem.module.css';
import { useDispatch } from 'react-redux';

export default function ContactItem({ contact }) {
  const dispatch = useDispatch();

  return (
    <li className={s.item}>
      <div>
        <p className={s.itemName}>{contact.name}</p>
        <p className={s.itemPhone}>{contact.number}</p>
      </div>
      <FormButton
        onClick={() => dispatch(contactsOperations.deleteContact(contact.id))}
        aria-label="Delete contact"
      >
        <MdDelete size="18" />
      </FormButton>
    </li>
  );
}

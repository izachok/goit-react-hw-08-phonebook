import * as Yup from 'yup';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import { useDispatch, useSelector } from 'react-redux';

import FormButton from '../FormButton/FormButton';
import s from './ContactForm.module.css';

export default function ContactForm() {
  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();

  const isInContacts = name => {
    name = name.toLowerCase();
    return (
      contacts.filter(contact => contact.name.toLowerCase().includes(name))
        .length > 0
    );
  };

  const addContact = ({ name, number }) => {
    if (isInContacts(name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(contactsOperations.addContact({ name, number }));
  };

  return (
    <div>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={Yup.object({
          name: Yup.string()
            .matches(
              /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
              "Name can contain only letters, ', - and space. For example: Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan etc.",
            )
            .required(),
          number: Yup.string()
            .matches(
              /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
              'Phone number should contain only numbers and it also could contain spaces, dash, parenthesis and startts with +',
            )
            .required(),
        })}
        onSubmit={(values, { resetForm }) => {
          addContact(values);
          resetForm();
        }}
      >
        <Form className={s.form}>
          <label className={s.label}>
            Name:
            <Field className={s.fieldInput} name="name" type="text" />
            <ErrorMessage
              name="name"
              component="span"
              className={s.validatorError}
            />
          </label>
          <label className={s.label}>
            Phone number:
            <Field className={s.fieldInput} name="number" type="tel" />
            <ErrorMessage
              name="number"
              component="span"
              className={s.validatorError}
            />
          </label>
          <FormButton type="submit">Add contact</FormButton>
        </Form>
      </Formik>
    </div>
  );
}

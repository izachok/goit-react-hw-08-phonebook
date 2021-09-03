import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import ErrorMessage from 'components/ErrorMessage';
import Filter from 'components/Filter';
import Loading from 'components/Loading';
import React from 'react';
import { useSelector } from 'react-redux';

export default function ContactsPage() {
  const error = useSelector(state => state.error);
  const isLoading = useSelector(state => state.isLoading);

  return (
    <>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      {error && <ErrorMessage message={error} />}
      {isLoading && <Loading />}
    </>
  );
}

import { contactsOperations, contactsSelectors } from 'redux/contacts';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import ContactEditor from 'components/ContactEditor';
import ContactItem from 'components/ContactItem';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2),
    listStyle: 'none',
  },
}));

export default function ContactList() {
  const contacts = useSelector(contactsSelectors.getFilteredContacts);
  const [currentContact, setCurrentContact] = useState(false);

  const dispatch = useDispatch();
  const c = useStyles();

  const handleDialogOpen = contact => {
    setCurrentContact(contact);
  };

  const handleDialogClose = () => {
    setCurrentContact(null);
  };

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <>
      <Grid container component="ul" spacing={3} className={c.root}>
        {contacts.length > 0 &&
          contacts.map(contact => (
            <ContactItem
              key={contact.id}
              contact={contact}
              onEdit={handleDialogOpen}
            />
          ))}
      </Grid>

      {currentContact && (
        <ContactEditor
          isOpen
          contact={currentContact}
          onClose={handleDialogClose}
        />
      )}
    </>
  );
}

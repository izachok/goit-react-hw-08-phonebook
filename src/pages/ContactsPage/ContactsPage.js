import {
  Button,
  Container,
  LinearProgress,
  Typography,
} from '@material-ui/core';
import { contactsActions, contactsSelectors } from '../../redux/contacts';

import ContactEditor from 'components/ContactEditor';
import ContactList from 'components/ContactList';
import ErrorNotification from 'components/ErrorNotification';
import Filter from 'components/Filter';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2),
  },
}));

export default function ContactsPage() {
  const error = useSelector(contactsSelectors.getError);
  const isLoading = useSelector(contactsSelectors.getIsLoading);
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [currentContact, setCurrentContact] = useState(null);

  const shouldOpenDialog = Boolean(isOpenDialog || currentContact);

  const c = useStyles();

  const handleDialogOpen = () => {
    setIsOpenDialog(true);
  };

  const handleDialogClose = () => {
    setIsOpenDialog(false);
    setCurrentContact(null);
  };

  const handleCurrentContact = contact => {
    setCurrentContact(contact);
  };

  return (
    <>
      <Container maxWidth="md" className={c.root}>
        <Button variant="contained" color="primary" onClick={handleDialogOpen}>
          Add contact
        </Button>
        <Typography variant="h3">Contacts</Typography>
        {error && (
          <ErrorNotification
            message={error}
            action={contactsActions.resetError}
          />
        )}
        <Filter />
        <ContactList onEdit={handleCurrentContact} />
        {isLoading && <LinearProgress />}
      </Container>

      {shouldOpenDialog && (
        <ContactEditor
          isOpen={shouldOpenDialog}
          onClose={handleDialogClose}
          contact={currentContact}
        />
      )}
    </>
  );
}

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
  const c = useStyles();

  const handleDialogOpen = () => {
    setIsOpenDialog(true);
  };

  const handleDialogClose = () => {
    setIsOpenDialog(false);
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
        <ContactList />
        {isLoading && <LinearProgress />}
      </Container>

      {isOpenDialog && (
        <ContactEditor isOpen={isOpenDialog} onClose={handleDialogClose} />
      )}
    </>
  );
}

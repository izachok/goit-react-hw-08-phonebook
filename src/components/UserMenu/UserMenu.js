import { Avatar, Button, Typography } from '@material-ui/core';
import { authOperations, authSelectors } from '../../redux/auth';
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  avatar: {
    display: 'inline-flex',
    marginRight: theme.spacing(1),
  },
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    marginRight: theme.spacing(1),
  },
}));

export default function UserMenu() {
  const userName = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();
  const c = useStyles();

  return (
    <div className={c.container}>
      <Avatar className={c.avatar} alt={userName} />
      <Typography className={c.text}>Hello, {userName}!</Typography>
      <Button
        type="button"
        variant="contained"
        size="small"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Logout
      </Button>
    </div>
  );
}

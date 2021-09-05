import { Avatar, IconButton, Typography } from '@material-ui/core';
import { authOperations, authSelectors } from '../../redux/auth';
import { useDispatch, useSelector } from 'react-redux';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

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
}));

export default function UserMenu() {
  const userName = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();
  const c = useStyles();

  return (
    <div className={c.container}>
      <Avatar className={c.avatar} alt={userName} />
      <Typography>{userName}</Typography>
      <IconButton
        color="inherit"
        onClick={() => dispatch(authOperations.logOut())}
      >
        <ExitToAppIcon />
      </IconButton>
    </div>
  );
}

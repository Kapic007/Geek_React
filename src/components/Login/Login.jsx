import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useState } from 'react';
import firebase from 'firebase';
import { emailRegex, passwordRegex } from '../../common/constants/auth-regex';
import { useDispatch } from 'react-redux';
import { signUpWithFB, loginWithFB } from '../../store/actions';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        GeekBrains chat
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login({isSignUp}) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password){
      alert('You must fill all fields!');
      return;
    } else if (!emailRegex.test(String(email).toLowerCase())) {
      alert('You must input a correct email adress!');
      setEmail('');
      return;
    // } else if (!passwordRegex.test(String(password).toLowerCase())) {
    //   alert(`You password must contain:
    //             at least one digit,
    //             at least one lower case,
    //             at least one upper case`);
    //   setPassword('');
    //   return;
    } else {
      try {
        if (isSignUp) {
          dispatch(signUpWithFB(email, password));
        } else {
          dispatch(loginWithFB(email, password));
        }

        setEmail('');
      setPassword('');
      } catch (error) {
        alert('Sorry! Got some error while registering.');
      }
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {isSignUp ? "SIGN UP" : "LOGIN"}
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            {isSignUp ? "SIGN UP" : "LOGIN"}
          </Button>
          <Grid container>
            <Grid item>
              <Link href={`${isSignUp ? "/login" : "/signup"}`} variant="body2">
                {`${isSignUp ? "Don't have account? Sign Up." : "Have account? Login."}`}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
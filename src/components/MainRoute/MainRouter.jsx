import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { Profile } from '../Profile/Profile';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Home from '../Home/Home';
import './mainRouter.css'
import Movies from '../Movie/Movies';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export const MainRouter = () => {
  const classes = useStyles();

  return (
    <Router>
      
      <div className="nav-buttons">
        <Link to="/home">
          <Button variant="contained" size="large" color="primary" className={classes.margin}>
            Chat
          </Button>
        </Link>
        <Link to="/profile">
          <Button variant="contained" size="large" color="primary" className={classes.margin}>
            Profile
          </Button>
        </Link>
        <Link to="/movies">
          <Button variant="contained" size="large" color="primary" className={classes.margin}>
            Movies
          </Button>
        </Link>
      </div>

      <Switch>
        <Route path="/profile" exact><Profile /></Route>
        <Route path="/home/:chatId?"><Home /></Route>
        <Route path="/movies"><Movies /></Route>
        <Route path="/" exact>
          <img className="home-logo" src="https://cisoclub.ru/wp-content/uploads/welcomechat.png.webp" alt="logo"></img>
        </Route>
        <Route path="*">
          <img src="https://storage.kun.uz/source/7/ZUg5Rc8dCGrq-xoaDq_2PMGZyzY6cfve.jpg" alt="404"></img>
        </Route>
      </Switch>
    </Router>
  );
}

export default MainRouter;
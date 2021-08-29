import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { getMoviesData } from '../../store/movies/actions';
import CircularProgress from '@material-ui/core/CircularProgress';
import { MOVIE_POSTER_URL } from '../../common/constants';
import './movies.css';
import { REQUEST_STATUS } from "../../common/constants/http-status";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 345,
  },
  media: {
    height: 500,
  },
}));

export const Movies = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const moviesData = useSelector((state) => state.movies.data);
  const isSpinner = useSelector((state) => state.movies.request.status) === REQUEST_STATUS.PENDING;
  const error = useSelector((state) => state.movies.request?.error);

  const requestMovies = useCallback(() => {
    dispatch(getMoviesData());
  }, []);

  useEffect(() => {
    requestMovies();
  }, []);

  if (error) {
    return (
      <div className="request-error">
        <div className="error-text">Oops...we have some problems</div>
        <Button onClick={requestMovies} variant="contained" size="large" color="primary">
          Try again
        </Button>
      </div>
    )
  }
  

  return (<>
    {isSpinner
      ? <CircularProgress className="spinner"/>
      : <Grid container spacing={3}>
        {moviesData && moviesData.map((movie) => {
          return (<Grid item xs={3} key={movie.id}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={MOVIE_POSTER_URL + movie.poster}
                title={movie.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {movie.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {movie.overview}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>)
        })}
          
        </Grid>}
  </>
  )
} 

export default Movies;
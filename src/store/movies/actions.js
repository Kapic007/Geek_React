import { REQUEST_PENDING, REQUEST_SUCCESS, REQUEST_ERROR, MAP_MOVIE_DATA } from "./actionTypes";
import { MOVIE_API_URL, POPULAR_MOVIE, MOVIE_API_KEY } from "../../common/constants";

export const getMoviesPending = () => ({
  type: REQUEST_PENDING,
});

export const getMoviesSuccess = (moviesData) => ({
  type: REQUEST_SUCCESS,
  payload: moviesData,
});

export const getMoviesError = (error) => ({
  type: REQUEST_ERROR,
  payload: error,
});


export const mapMoviesData = (moviesData) => ({
  type: MAP_MOVIE_DATA,
  payload: moviesData,
})

export const getMoviesData = () => async (dispatch) => {
  dispatch(getMoviesPending());

  try {
    const response = await fetch(MOVIE_API_URL + POPULAR_MOVIE + MOVIE_API_KEY);
    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }
    const result = await response.json();
    dispatch(mapMoviesData(result))

    dispatch(getMoviesSuccess());
  } catch (err) {
    dispatch(getMoviesError(err.message));
  }
};
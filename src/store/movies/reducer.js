import { REQUEST_STATUS } from "../../common/constants";
import { REQUEST_PENDING, REQUEST_SUCCESS, REQUEST_ERROR, MAP_MOVIE_DATA } from "./actionTypes";

const initialState = {
  data: [],
  request: {
    status: REQUEST_STATUS.IDLE,
    error: null,
  },
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REQUEST_PENDING: {
      return {
        ...state,
        request: {
          ...state.request,
          error: null,
          status: REQUEST_STATUS.PENDING,
        },
      };
    }
    case REQUEST_SUCCESS: {
      return {
        ...state,
        request: {
          status: REQUEST_STATUS.SUCCESS,
        },
      };
    }
    case REQUEST_ERROR: {
      return {
        ...state,
        request: {
          status: REQUEST_STATUS.ERROR,
          error: payload,
        },
      };
    }
    case MAP_MOVIE_DATA: {
      const mappedData = payload.results.map((movie) => {
        const mappedMovie = {
          id: movie?.id,
          title: movie?.title,
          overview: movie?.overview,
          releaseDate: movie?.release_date,
          poster: movie?.poster_path,
        };
        return mappedMovie;
      });

      return {
        ...state,
        data: mappedData,
      };
    }
    default:
      return state;
  }
};
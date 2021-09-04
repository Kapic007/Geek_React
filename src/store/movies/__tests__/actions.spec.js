import { getMoviesPending, getMoviesSuccess, getMoviesError, mapMoviesData, getMoviesData } from "../actions";
import { REQUEST_PENDING, REQUEST_SUCCESS, REQUEST_ERROR, MAP_MOVIE_DATA } from "../actionTypes";

describe("getMoviesPending", () => {
  it("return an object with specified type", () => {
    const result = getMoviesPending();
    expect(result).toEqual({ type: REQUEST_PENDING });
  });
});

describe("getMoviesSuccess", () => {
  it("return an object with specified type and incomming data", () => {
    const data = []
    const result = getMoviesSuccess(data);
    expect(result).toEqual({type: REQUEST_SUCCESS, payload: data});
  });
});

describe("getMoviesError", () => {
  it("return an object with specified type and incomming error", () => {
    const error = 'some error'
    const result = getMoviesError(error);
    expect(result).toEqual({type: REQUEST_ERROR, payload: error});
  });
});

describe("mapMoviesData", () => {
  it("return an object with specified type and incomming data", () => {
    const data = ["one", "two"]
    const result = mapMoviesData(data);
    const expectedResult = {type: MAP_MOVIE_DATA, payload: data};
    expect(result).toEqual(expectedResult);
  });
});

describe("getMoviesData", () => {
  it("return an anonymous function", () => {
    const result = getMoviesData();
    expect(result).toEqual(expect.any(Function));
  });
});
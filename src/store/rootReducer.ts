import { combineReducers } from '@reduxjs/toolkit'
import moviesReducer from './movies/moviesSlice'
import nominationsReducer from './nominations/nominationSlice'
import singleMovieReducer from './singleMovie/singleMovieSlice'

export const rootReducer = combineReducers({
  movies: moviesReducer,
  nominations: nominationsReducer,
  singleMovie: singleMovieReducer,
})

export type RootState = ReturnType<typeof rootReducer>

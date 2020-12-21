import { combineReducers } from '@reduxjs/toolkit'
import moviesReducer from './movies/moviesSlice'
import nominationsReducer from './nominations/nominationSlice'

export const rootReducer = combineReducers({
  movies: moviesReducer,
  nominations: nominationsReducer,
})

export type RootState = ReturnType<typeof rootReducer>

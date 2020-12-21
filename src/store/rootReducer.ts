import { combineReducers } from '@reduxjs/toolkit'
import moviesReducer from './movies/moviesSlice'

export const rootReducer = combineReducers({
  movies: moviesReducer,
})

export type RootState = ReturnType<typeof rootReducer>

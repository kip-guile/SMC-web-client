import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { MovieState } from './types'
import { apiKey } from '../../config/index'

const moviesInitialState: MovieState = {
  searchString: '',
  movies: [],
  loading: false,
}

export const searchMovieDatabase = createAsyncThunk(
  'movies/searchMovieDatabase',
  async (searchString: string) => {
    const res = await axios.get(
      `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchString}`
    )
    return { movies: res.data.Search, string: searchString }
  }
)

const movieSlice = createSlice({
  name: 'movies',
  initialState: moviesInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchMovieDatabase.pending, (state, action) => {
      return {
        ...state,
        loading: true,
      }
    })
    builder.addCase(searchMovieDatabase.fulfilled, (state, action) => {
      return {
        searchString: action.payload.string,
        movies: action.payload.movies ? action.payload.movies : [],
        loading: false,
      }
    })
    builder.addCase(searchMovieDatabase.rejected, (state, action) => {
      return {
        ...state,
        movies: [...state.movies],
        loading: false,
      }
    })
  },
})

export default movieSlice.reducer

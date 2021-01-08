import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { MovieState } from './types'
import { apiKey } from '../../config/index'

export const moviesInitialState: MovieState = {
  searchString: '',
  movies: [],
  loading: false,
  error: '',
}

export const searchMovieDatabase = createAsyncThunk(
  'movies/searchMovieDatabase',
  async (searchString: string) => {
    const res = await axios.get(
      `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchString}`
    )
    window.localStorage.setItem('movies', JSON.stringify(res.data.Search))
    console.log(res.data)
    if (res.data.Response === 'True') {
      return { movies: res.data.Search, string: searchString }
    } else {
      return res.data.Error
    }
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
      if (action.payload.string) {
        return {
          searchString: action.payload.string,
          movies: action.payload.movies ? action.payload.movies : [],
          loading: false,
          error: '',
        }
      } else {
        return {
          ...state,
          loading: false,
          error: action.payload,
        }
      }
    })
    builder.addCase(searchMovieDatabase.rejected, (state, action) => {
      return {
        ...state,
        movies: [...state.movies],
        loading: false,
        error: '',
      }
    })
  },
})

export default movieSlice.reducer

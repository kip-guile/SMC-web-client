import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { Movie } from './types'
import axios from 'axios'

const moviesInitialState: Movie[] = []

export const searchMovieDatabase = createAsyncThunk(
  'movies/searchMovieDatabase',
  async (searchString: string) => {
    const res = await axios.get(
      `http://www.omdbapi.com/?apikey=45f98500&s=${searchString}`
    )
    return res.data.Search
  }
)

const movieSlice = createSlice({
  name: 'movies',
  initialState: moviesInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchMovieDatabase.fulfilled, (state, action) => {
      return action.payload
    })
  },
})

export default movieSlice.reducer

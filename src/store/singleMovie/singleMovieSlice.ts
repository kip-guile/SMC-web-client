import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { SingleMovie } from './types'
import { apiKey } from '../../config/index'

const singleMovieInitialState: SingleMovie = {
  Rated: '',
  Released: '',
  Runtime: '',
  Genre: '',
  Director: '',
  Actors: '',
  Plot: '',
  Language: '',
  Country: '',
  Awards: '',
  Ratings: [],
  Metascore: '',
  imdbRating: '',
  Title: '',
  Year: '',
  imdbID: '',
  Type: '',
  Poster: '',
}

export const getMovie = createAsyncThunk(
  'singleMovie/getMovie',
  async (id: string) => {
    const res = await axios.get(
      `https://www.omdbapi.com/?apikey=${apiKey}&i=${id}`
    )
    return res.data
  }
)

const singleMovieSlice = createSlice({
  name: 'singleMovie',
  initialState: singleMovieInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMovie.fulfilled, (state, action) => {
      return action.payload
    })
  },
})

export default singleMovieSlice.reducer

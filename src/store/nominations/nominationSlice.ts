import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { Movie } from '../movies/types'
import { FinalNominations } from './types'
import { baseUrl } from '../../config/index'

const nominationsInitialState: FinalNominations = {
  loading: false,
  error: '',
  nominations: [],
}

let url = baseUrl || ''

export const addNomination = createAsyncThunk(
  'nominations/addNomination',
  async (movie: Movie) => {
    const res = await axios.post(url, movie)
    return res.data
  }
)

export const getNominations = createAsyncThunk(
  'nominations/getNominations',
  async () => {
    const res = await axios.get(url)
    return res.data
  }
)

export const removeNomination = createAsyncThunk(
  'nominations/removeNomination',
  async (id: string) => {
    const res = await axios.delete(`${url}${id}`)
    return res.data
  }
)

const nominationsSlice = createSlice({
  name: 'nominations',
  initialState: nominationsInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addNomination.pending, (state, action) => {
      return { ...state, loading: true }
    })
    builder.addCase(addNomination.fulfilled, (state, action) => {
      return {
        loading: false,
        error: '',
        nominations: [...state.nominations, action.payload],
      }
    })
    builder.addCase(addNomination.rejected, (state, action) => {
      return {
        ...state,
        error: 'Failed to nominate. You may have already made this nomination.',
        loading: false,
      }
    })
    builder.addCase(getNominations.fulfilled, (state, action) => {
      return { ...state, nominations: action.payload }
    })
    builder.addCase(removeNomination.pending, (state, action) => {
      return { ...state, loading: true }
    })
    builder.addCase(removeNomination.fulfilled, (state, action) => {
      return { loading: false, nominations: action.payload, error: '' }
    })
    builder.addCase(removeNomination.rejected, (state, action) => {
      return { ...state, loading: false, error: 'failed to remove nomination' }
    })
  },
})

export default nominationsSlice.reducer

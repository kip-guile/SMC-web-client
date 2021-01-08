import movieSliceReducer from '../movies/moviesSlice'
import { moviesInitialState } from '../movies/moviesSlice'

const payload = {
  movies: [],
  string: 'hey',
}

const finalState = {
  searchString: '',
  movies: [],
  loading: true,
  error: '',
}

it('handles actions of type movies/searchMovieDatabase/pending', () => {
  const action = {
    type: 'movies/searchMovieDatabase/pending',
    payload,
  }

  const newState = movieSliceReducer(moviesInitialState, action)

  expect(newState).toEqual(finalState)
})

it('handles actions of type movies/searchMovieDatabase/rejected', () => {
  const action = {
    type: 'movies/searchMovieDatabase/rejected',
    payload,
  }

  const newState = movieSliceReducer(moviesInitialState, action)

  expect(newState).toEqual({
    ...finalState,
    loading: false,
  })
})

it('handles actions of type movies/searchMovieDatabase/fulfilled', () => {
  const action = {
    type: 'movies/searchMovieDatabase/fulfilled',
    payload,
  }

  const newState = movieSliceReducer(moviesInitialState, action)

  expect(newState).toEqual({
    ...finalState,
    searchString: 'hey',
    loading: false,
  })
})

it('handles actions of unknown type', () => {
  const action = {
    type: 'purple',
    payload,
  }

  const newState = movieSliceReducer(moviesInitialState, action)

  expect(newState).toEqual({ ...finalState, loading: false })
})

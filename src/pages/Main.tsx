import React, { useEffect } from 'react'
import { Box, Text, Spinner } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { useThunkDispatch } from '../hooks/useThunkDispatch'
import { RootState } from '../store/rootReducer'
import { searchMovieDatabase } from '../store/movies/moviesSlice'

const Main = () => {
  const dispatch = useThunkDispatch()
  const searchedMovies = useSelector((state: RootState) => state.movies)
  useEffect(() => {
    dispatch(searchMovieDatabase('blade'))
  }, [])

  return (
    <Box>
      {searchedMovies.map((movie) => (
        <div>{movie.Title}</div>
      ))}
    </Box>
  )
}

export default Main

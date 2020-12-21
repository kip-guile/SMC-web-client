import React, { useEffect } from 'react'
import { Box, Text, Spinner } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { useThunkDispatch } from '../hooks/useThunkDispatch'
import { RootState } from '../store/rootReducer'
import { searchMovieDatabase } from '../store/movies/moviesSlice'
import Card from './card'

interface ResultsProps {
  searchString: string
}

const Results = ({ searchString }: ResultsProps) => {
  const dispatch = useThunkDispatch()
  const searchedMovies = useSelector((state: RootState) => state.movies)
  useEffect(() => {
    dispatch(searchMovieDatabase('blade'))
  }, [])

  return (
    <Box w='60%'>
      <Text>Results for {searchString}</Text>
      {searchedMovies.map((movie, i) => (
        <Card key={i} movie={movie} />
      ))}
    </Box>
  )
}

export default Results

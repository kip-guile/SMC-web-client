import React, { useEffect } from 'react'
import { Box, Text, Spinner } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { useThunkDispatch } from '../hooks/useThunkDispatch'
import { RootState } from '../store/rootReducer'
import { searchMovieDatabase } from '../store/movies/moviesSlice'
import Results from '../components/results'

const Main = () => {
  return (
    <Box>
      <Results />
    </Box>
  )
}

export default Main

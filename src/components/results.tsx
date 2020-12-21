import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/rootReducer'
import Card from './card'

interface ResultsProps {
  searchString: string
}

const Results = ({ searchString }: ResultsProps) => {
  const searchedMovies = useSelector((state: RootState) => state.movies.movies)
  const mainString = useSelector(
    (state: RootState) => state.movies.searchString
  )
  console.log(searchedMovies)
  return (
    <Box w='60%'>
      {searchedMovies.length > 0 && mainString.length > 0 ? (
        <Text mb={4} fontSize='xl'>
          Results for "{mainString}"
        </Text>
      ) : null}
      {searchedMovies.length > 0 ? (
        searchedMovies.map((movie, i) => <Card key={i} movie={movie} />)
      ) : (
        <Text textAlign='center' mb={4} fontSize='xl'>
          Search for a movie
        </Text>
      )}
    </Box>
  )
}

export default Results

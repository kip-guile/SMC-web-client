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
  return (
    <Box
      w='65%'
      backgroundColor='whitesmoke'
      display='flex'
      flexDirection='column'
      borderRadius={8}
      p={4}
      height='37rem'
      overflow='auto'
      fontFamily='Crimson Text, serif'
    >
      {searchedMovies.length > 0 && mainString.length > 0 ? (
        <Text fontWeight='bold' mb={4} fontSize='xl'>
          Results for "{mainString}"
        </Text>
      ) : null}
      <Box
        w='100%'
        display='flex'
        flexWrap='wrap'
        justifyContent='space-between'
      >
        {searchedMovies.length > 0 ? (
          searchedMovies.map((movie, i) => <Card key={i} movie={movie} />)
        ) : (
          <Text fontWeight='bold' textAlign='center' mb={4} fontSize='xl'>
            Search for a movie...
          </Text>
        )}
      </Box>
    </Box>
  )
}

export default Results

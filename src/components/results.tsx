import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/rootReducer'
import Card from './card'
import { Movie } from '../store/movies/types'

interface ResultsProps {
  searchString: string
}

const Results = ({ searchString }: ResultsProps) => {
  const localMovies = localStorage.getItem('movies')
  const persistedMovies = !localMovies
    ? []
    : localMovies[0] === 'u'
    ? []
    : JSON.parse(localMovies)
  const searchedMovies = useSelector((state: RootState) => state.movies.movies)
  const mainString = useSelector(
    (state: RootState) => state.movies.searchString
  )
  let objToRender = searchedMovies.length > 0 ? searchedMovies : persistedMovies
  return (
    <Box
      w={{ lg: '65%' }}
      backgroundColor='whitesmoke'
      display={{ lg: 'flex' }}
      flexDirection={{ lg: 'column' }}
      borderRadius={8}
      p={4}
      height={{ lg: '37rem' }}
      overflow={{ lg: 'auto' }}
      fontFamily='Crimson Text, serif'
      marginBottom={{ base: 4, lg: 0 }}
    >
      {searchedMovies.length > 0 && mainString.length > 0 ? (
        <Text fontWeight='bold' mb={4} fontSize='xl'>
          Results for "{mainString}"
        </Text>
      ) : null}
      <Box
        w='100%'
        display={{ lg: 'flex' }}
        flexWrap='wrap'
        justifyContent='space-between'
      >
        {objToRender.length > 0 ? (
          objToRender.map((movie: Movie, i: number) => (
            <Card key={i} movie={movie} />
          ))
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

import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Box, Text, Spinner, Image } from '@chakra-ui/react'
import { useThunkDispatch } from '../hooks/useThunkDispatch'
import { RootState } from '../store/rootReducer'
import { getMovie } from '../store/singleMovie/singleMovieSlice'

interface SingleMovieProps {
  match: any
}

const SingleMovie = ({ match }: SingleMovieProps) => {
  const movieId = match.params.id
  const dispatch = useThunkDispatch()
  const movie = useSelector((state: RootState) => state.singleMovie)

  useEffect(() => {
    dispatch(getMovie(movieId))
  }, [movieId, dispatch])

  return (
    <Box p='2rem'>
      {movie.Title !== '' ? (
        <Box d='flex' flexDirection='column' alignItems='center'>
          <Text mb={4} fontSize='3xl' textAlign='center'>
            {movie.Title} ({movie.Year})
          </Text>
          <Image m={8} boxSize='500px' src={movie.Poster} alt={movie.Title} />
          <Box ml='10rem' mr='10rem'>
            <Text mb={3}>Plot: {movie.Plot}</Text>
            <Text mb={3}>Actors: {movie.Actors}</Text>
            <Text mb={3}>Director: {movie.Director}</Text>
            <Text mb={3}>
              Language: {movie.Language} ({movie.Country})
            </Text>
          </Box>
        </Box>
      ) : (
        <Spinner />
      )}
    </Box>
  )
}

export default SingleMovie

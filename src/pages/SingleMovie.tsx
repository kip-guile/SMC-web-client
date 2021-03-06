import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Box, Text, Image } from '@chakra-ui/react'
import { useThunkDispatch } from '../hooks/useThunkDispatch'
import { RootState } from '../store/rootReducer'
import { getMovie } from '../store/singleMovie/singleMovieSlice'
import LoadingModal from '../components/loadingModal'

interface SingleMovieProps {
  match: any
}

const SingleMovie = ({ match }: SingleMovieProps) => {
  const movieId = match.params.id
  const dispatch = useThunkDispatch()
  const movie = useSelector((state: RootState) => state.singleMovie.singleMovie)
  const loading = useSelector((state: RootState) => state.singleMovie.loading)

  useEffect(() => {
    dispatch(getMovie(movieId))
  }, [movieId, dispatch])

  return (
    <Box backgroundColor='#282c35' p='2rem'>
      <Box d='flex' flexDirection='column' alignItems='center'>
        <Text
          color='white'
          fontWeight='bold'
          mb={4}
          fontSize='3xl'
          textAlign='center'
        >
          {movie.Title} ({movie.Year})
        </Text>
        <Image m={8} boxSize='500px' src={movie.Poster} alt={movie.Title} />
        <Box
          fontFamily='Crimson Text, serif'
          padding={8}
          backgroundColor='whitesmoke'
          ml={{ lg: '10rem' }}
          mr={{ lg: '10rem' }}
        >
          <Text mb={3}>Plot: {movie.Plot}</Text>
          <Text mb={3}>Actors: {movie.Actors}</Text>
          <Text mb={3}>Runtime: {movie.Runtime}</Text>
          <Text mb={3}>Director: {movie.Director}</Text>
          <Text mb={3}>Genre: {movie.Genre}</Text>
          <Text mb={3}>
            Language: {movie.Language} ({movie.Country})
          </Text>
        </Box>
      </Box>
      <LoadingModal isOpen={loading} onClose={() => {}} />
    </Box>
  )
}

export default SingleMovie

import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Box, Text, Spinner } from '@chakra-ui/react'
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
    console.log('called')
    dispatch(getMovie(movieId))
  }, [movieId])
  console.log(movie)
  return (
    <Box>{movie.Title !== '' ? <Text>{movie.Title}</Text> : <Spinner />}</Box>
  )
}

export default SingleMovie

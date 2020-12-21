import React from 'react'
import { Box, Text, Button } from '@chakra-ui/react'
import { useThunkDispatch } from '../hooks/useThunkDispatch'
import { Movie } from '../store/movies/types'
import { addNominationActionCreator } from '../store/nominations/nominationSlice'

interface CardProps {
  movie: Movie
}

const Card = ({ movie }: CardProps) => {
  const dispatch = useThunkDispatch()
  const nominateFxn = () => {
    dispatch(addNominationActionCreator(movie))
  }
  return (
    <Box m={5}>
      <Text>{movie.Title}</Text>
      <Text>{movie.Year}</Text>
      <Button onClick={nominateFxn}>Nominate</Button>
    </Box>
  )
}

export default Card

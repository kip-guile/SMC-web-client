import React from 'react'
import { Box, Text, Button } from '@chakra-ui/react'
import { Movie } from '../store/movies/types'

interface CardProps {
  movie: Movie
}

const Card = ({ movie }: CardProps) => {
  return (
    <Box m={5}>
      <Text>{movie.Title}</Text>
      <Text>{movie.Year}</Text>
      <Button>Nominate</Button>
    </Box>
  )
}

export default Card

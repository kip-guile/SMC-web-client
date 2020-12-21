import React from 'react'
import { Box, Text, Button, Image } from '@chakra-ui/react'
import { useThunkDispatch } from '../hooks/useThunkDispatch'
import { Movie } from '../store/movies/types'
import { removeNominationActionCreator } from '../store/nominations/nominationSlice'

interface CardProps {
  movie: Movie
}

const NominationCard = ({ movie }: CardProps) => {
  const dispatch = useThunkDispatch()
  const removeNominationFxn = () => {
    dispatch(removeNominationActionCreator(movie))
  }
  return (
    <Box d='flex' bgColor='whitesmoke' mb='2rem' p={5}>
      <Image mr={5} boxSize='100px' src={movie.Poster} alt={movie.Title} />
      <Box>
        <Text>{movie.Title}</Text>
        <Text>{movie.Year}</Text>
        <Button onClick={removeNominationFxn}>Remove</Button>
      </Box>
    </Box>
  )
}

export default NominationCard

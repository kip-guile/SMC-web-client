import React from 'react'
import { Box, Text, Button, Image } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { useThunkDispatch } from '../hooks/useThunkDispatch'
import { Movie } from '../store/movies/types'
import { addNominationActionCreator } from '../store/nominations/nominationSlice'

interface CardProps {
  movie: Movie
}

const Card = ({ movie }: CardProps) => {
  const link = `/movies/${movie.imdbID}`
  const dispatch = useThunkDispatch()
  const nominateFxn = () => {
    dispatch(addNominationActionCreator(movie))
  }
  return (
    <Box d='flex' bgColor='whitesmoke' mb='2rem' p={5}>
      <Image mr={5} boxSize='100px' src={movie.Poster} alt={movie.Title} />
      <Box>
        <NavLink to={link}>
          <Text>{movie.Title}</Text>
        </NavLink>
        <Text>{movie.Year}</Text>
        <Button onClick={nominateFxn}>Nominate</Button>
      </Box>
    </Box>
  )
}

export default Card

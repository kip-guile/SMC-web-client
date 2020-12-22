import React from 'react'
import { Box, Text, Button, Image } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { useThunkDispatch } from '../hooks/useThunkDispatch'
import { Movie } from '../store/movies/types'
import { removeNomination } from '../store/nominations/nominationSlice'

interface CardProps {
  movie: Movie
}

const NominationCard = ({ movie }: CardProps) => {
  const link = `/movies/${movie.imdbID}`
  const dispatch = useThunkDispatch()
  const removeNominationFxn = () => {
    dispatch(removeNomination(movie.imdbID))
  }
  return (
    <Box d='flex' bgColor='white' mb='2rem' p={5} borderRadius={8}>
      <Image mr={5} boxSize='100px' src={movie.Poster} alt={movie.Title} />
      <Box
        display='flex'
        alignItems='flex-start'
        flexDirection='column'
        justifyContent='space-evenly'
      >
        <NavLink to={link}>
          <Box
            borderBottom='solid #282c35 1px'
            _active={{
              color: '#00BF86',
              borderBottom: 'solid #00BF86 1px',
            }}
            _hover={{
              color: '#00BF86',
              borderBottom: 'solid #00BF86 1px',
            }}
          >
            {movie.Title}
          </Box>
        </NavLink>
        <Text>{movie.Year}</Text>
        <Button colorScheme='pink' size='sm' onClick={removeNominationFxn}>
          Remove
        </Button>
      </Box>
    </Box>
  )
}

export default NominationCard

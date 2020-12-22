import React from 'react'
import { Box, Text, Button, Image } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { useThunkDispatch } from '../hooks/useThunkDispatch'
import { Movie } from '../store/movies/types'
import { RootState } from '../store/rootReducer'
import { addNomination } from '../store/nominations/nominationSlice'

interface CardProps {
  movie: Movie
}

const Card = ({ movie }: CardProps) => {
  const link = `/movies/${movie.imdbID}`
  const dispatch = useThunkDispatch()
  const nominateFxn = () => {
    dispatch(addNomination(movie))
  }
  const nominations = useSelector(
    (state: RootState) => state.nominations.nominations
  )
  const index = nominations.findIndex((film) => film.imdbID === movie.imdbID)
  return (
    <Box
      w='45%'
      d='flex'
      bgColor={index === -1 ? 'white' : '#bee3f8'}
      mb='2rem'
      p={5}
      borderRadius={8}
    >
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
        {index === -1 ? (
          <Button
            colorScheme='teal'
            size='sm'
            disabled={nominations.length >= 5}
            onClick={nominateFxn}
          >
            Nominate
          </Button>
        ) : (
          <Button variant='outline' colorScheme='pink' size='sm' disabled>
            Selected
          </Button>
        )}
      </Box>
    </Box>
  )
}

export default Card

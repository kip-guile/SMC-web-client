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
    <Box
      color='white'
      d='flex'
      bgColor='#95979b'
      mb='2rem'
      p={5}
      borderRadius={8}
    >
      <Image
        mr={5}
        boxSize='100px'
        src={
          movie.Poster === 'N/A'
            ? 'https://dummyimage.com/150x200/efefef/000000.png&text=Poster+not+available'
            : movie.Poster
        }
        alt={movie.Title}
      />
      <Box
        display='flex'
        alignItems='flex-start'
        flexDirection='column'
        justifyContent='space-evenly'
      >
        <NavLink to={link}>
          <Text
            fontWeight='bold'
            color='white'
            _hover={{
              color: 'silver',
            }}
          >
            {movie.Title}
          </Text>
        </NavLink>
        <Text>{movie.Year}</Text>
        <Button colorScheme='pink' size='sm' onClick={removeNominationFxn}>
          Drop
        </Button>
      </Box>
    </Box>
  )
}

export default NominationCard

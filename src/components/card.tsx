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
      w={{ md: '30%' }}
      d='flex'
      bgColor={index === -1 ? '#282c35' : '#95979b'}
      color='white'
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
        fontSize='0.9rem'
        alignItems='flex-start'
        flexDirection='column'
        justifyContent='space-evenly'
      >
        <NavLink to={link}>
          <Text
            fontWeight='bold'
            color='#00BF86'
            _hover={{
              color: '#319795',
            }}
          >
            {movie.Title}
          </Text>
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
          <Button variant='outline' colorScheme='white' size='sm' disabled>
            Selected
          </Button>
        )}
      </Box>
    </Box>
  )
}

export default Card

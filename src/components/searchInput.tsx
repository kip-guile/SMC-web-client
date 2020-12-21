import React, { useState } from 'react'
import { Box, Input, InputGroup, Button } from '@chakra-ui/react'
import { Movie } from '../store/movies/types'
import { useThunkDispatch } from '../hooks/useThunkDispatch'
import { searchMovieDatabase } from '../store/movies/moviesSlice'

const SearchInput = () => {
  const [text, setText] = useState('')
  const dispatch = useThunkDispatch()
  const searchMovieDatabaseFunction = () => {
    dispatch(searchMovieDatabase(text))
  }
  return (
    <Box m={5}>
      <InputGroup w='50rem' size='sm'>
        <Input
          placeholder='Search'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setText(e.target.value)
          }
        />
        <Button onClick={searchMovieDatabaseFunction}>Search</Button>
      </InputGroup>
    </Box>
  )
}

export default SearchInput

import React, { useState } from 'react'
import { Box, Input, InputGroup, Button } from '@chakra-ui/react'
import { Movie } from '../store/movies/types'
import { useThunkDispatch } from '../hooks/useThunkDispatch'
import { searchMovieDatabase } from '../store/movies/moviesSlice'

interface SearchInputProps {
  setText(e: string): void
  searchMovieDatabaseFunction(): void
}

const SearchInput = ({
  setText,
  searchMovieDatabaseFunction,
}: SearchInputProps) => {
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

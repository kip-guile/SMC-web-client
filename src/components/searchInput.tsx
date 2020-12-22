import React from 'react'
import { Box, Input, InputGroup, Button } from '@chakra-ui/react'

interface SearchInputProps {
  setText(e: string): void
  searchMovieDatabaseFunction(): void
}

const SearchInput = ({
  setText,
  searchMovieDatabaseFunction,
}: SearchInputProps) => {
  return (
    <Box
      p={5}
      d='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      backgroundColor='whitesmoke'
    >
      <InputGroup w='50rem' size='sm'>
        <Input
          backgroundColor='white'
          mr={8}
          placeholder='Search'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setText(e.target.value)
          }
        />
        <Button
          colorScheme='teal'
          size='sm'
          onClick={searchMovieDatabaseFunction}
        >
          Search
        </Button>
      </InputGroup>
    </Box>
  )
}

export default SearchInput

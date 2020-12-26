import React from 'react'
import { Box, Input, InputGroup, Button } from '@chakra-ui/react'

interface SearchInputProps {
  setText(e: string): void
  searchMovieDatabaseFunction(event: React.FormEvent<HTMLFormElement>): void
  text: string
}

const SearchInput = ({
  setText,
  searchMovieDatabaseFunction,
  text,
}: SearchInputProps) => {
  return (
    <Box
      p={5}
      d='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      w='50%'
    >
      <form style={{ width: '70%' }} onSubmit={searchMovieDatabaseFunction}>
        <InputGroup size='sm'>
          <Input
            backgroundColor='white'
            mr={8}
            w='100%'
            value={text}
            placeholder='Search'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setText(e.target.value)
            }
          />
          <Button type='submit' colorScheme='teal' size='sm'>
            Search
          </Button>
        </InputGroup>
      </form>
    </Box>
  )
}

export default SearchInput

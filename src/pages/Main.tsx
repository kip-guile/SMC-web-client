import React, { useEffect } from 'react'
import { Box, Input, Spinner } from '@chakra-ui/react'
import Results from '../components/results'
import SearchInput from '../components/searchInput'

const Main = () => {
  return (
    <Box>
      <SearchInput />
      <Results />
    </Box>
  )
}

export default Main

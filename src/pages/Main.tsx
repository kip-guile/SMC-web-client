import React, { useState } from 'react'
import { Box, Text, Spinner } from '@chakra-ui/react'
import Results from '../components/results'
import { useThunkDispatch } from '../hooks/useThunkDispatch'
import SearchInput from '../components/searchInput'
import Nominations from '../components/nominations'
import { searchMovieDatabase } from '../store/movies/moviesSlice'

const Main = () => {
  const [text, setText] = useState('')
  const dispatch = useThunkDispatch()
  const searchMovieDatabaseFunction = () => {
    dispatch(searchMovieDatabase(text))
  }
  return (
    <Box>
      <Text>The Shoppies</Text>
      <SearchInput
        setText={setText}
        searchMovieDatabaseFunction={searchMovieDatabaseFunction}
      />
      <Box d='flex' justifyContent='space-evenly'>
        <Results searchString={text} />
        <Nominations />
      </Box>
    </Box>
  )
}

export default Main

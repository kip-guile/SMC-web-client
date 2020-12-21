import React, { useState } from 'react'
import { Box, Text } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import Results from '../components/results'
import { useThunkDispatch } from '../hooks/useThunkDispatch'
import SearchInput from '../components/searchInput'
import Nominations from '../components/nominations'
import { RootState } from '../store/rootReducer'
import { searchMovieDatabase } from '../store/movies/moviesSlice'
import LoadingModal from '../components/loadingModal'
import Banner from '../components/banner'

const Main = () => {
  const [text, setText] = useState('')
  const dispatch = useThunkDispatch()
  const loading = useSelector((state: RootState) => state.nominations.loading)
  const nominations = useSelector(
    (state: RootState) => state.nominations.nominations
  )
  const searchMovieDatabaseFunction = () => {
    dispatch(searchMovieDatabase(text))
  }
  return (
    <Box>
      <Text textAlign='center' fontSize='4xl'>
        The Shoppies
      </Text>
      <SearchInput
        setText={setText}
        searchMovieDatabaseFunction={searchMovieDatabaseFunction}
      />
      <Box p={5} m={5}>
        {nominations.length === 5 ? (
          <Banner status='info' message='You have five nominations' />
        ) : null}
      </Box>
      <Box d='flex' justifyContent='space-evenly'>
        <Results searchString={text} />
        <Nominations />
      </Box>
      <LoadingModal isOpen={loading} onClose={() => {}} />
    </Box>
  )
}

export default Main

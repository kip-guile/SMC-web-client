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
  const searchLoading = useSelector((state: RootState) => state.movies.loading)
  const searchErrors = useSelector((state: RootState) => state.movies.error)
  const nominations = useSelector(
    (state: RootState) => state.nominations.nominations
  )
  const searchMovieDatabaseFunction = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()
    dispatch(searchMovieDatabase(text))
    setText('')
  }
  return (
    <Box
      d={{ lg: 'flex' }}
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      p={8}
      backgroundColor='#282c35'
    >
      <Box d={{ lg: 'flex' }} w='100%' justifyContent='space-around'>
        <Text
          color='#ffa7c4'
          fontWeight='bold'
          textAlign='center'
          fontSize='4xl'
        >
          The Shoppies
        </Text>
        <SearchInput
          setText={setText}
          text={text}
          searchMovieDatabaseFunction={searchMovieDatabaseFunction}
        />
      </Box>
      <Box p={2}>
        {searchErrors ? (
          <Banner status='warning' message={searchErrors} />
        ) : null}
      </Box>
      <Box p={2}>
        {nominations.length >= 5 ? (
          <Banner status='info' message='You have five nominations' />
        ) : null}
      </Box>
      <Box w='100%' d={{ lg: 'flex' }} justifyContent='space-evenly'>
        <Results searchString={text} />
        <Nominations />
      </Box>
      <LoadingModal isOpen={loading || searchLoading} onClose={() => {}} />
    </Box>
  )
}

export default Main

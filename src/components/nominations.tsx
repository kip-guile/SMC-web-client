import React, { useEffect } from 'react'
import { Box, Text } from '@chakra-ui/react'
import { useThunkDispatch } from '../hooks/useThunkDispatch'
import { useSelector } from 'react-redux'
import { RootState } from '../store/rootReducer'
import NominationCard from './nominationCard'
import { getNominations } from '../store/nominations/nominationSlice'

const Nominations = () => {
  const dispatch = useThunkDispatch()
  const nominations = useSelector(
    (state: RootState) => state.nominations.nominations
  )

  useEffect(() => {
    dispatch(getNominations())
  }, [])
  return (
    <Box w='30%'>
      <Text mb={4} fontSize='xl'>
        Nominations
      </Text>
      {nominations.map((movie, i) => (
        <NominationCard key={i} movie={movie} />
      ))}
    </Box>
  )
}

export default Nominations

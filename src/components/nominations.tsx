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
  }, [dispatch])
  return (
    <Box
      w={{ lg: '25%' }}
      backgroundColor='whitesmoke'
      display='flex'
      flexDirection='column'
      borderRadius={8}
      p={4}
      height={{ lg: '37rem' }}
      overflow={{ lg: 'auto' }}
      fontFamily='Crimson Text, serif'
    >
      <Text fontWeight='bold' mb={4} fontSize='xl'>
        My nominations
      </Text>
      {nominations.map((movie, i) => (
        <NominationCard key={i} movie={movie} />
      ))}
    </Box>
  )
}

export default Nominations

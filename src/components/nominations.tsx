import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/rootReducer'
import NominationCard from './nominationCard'

const Nominations = () => {
  const nominations = useSelector((state: RootState) => state.nominations)

  return (
    <Box w='30%'>
      <Text>Nominations</Text>
      {nominations.map((movie, i) => (
        <NominationCard key={i} movie={movie} />
      ))}
    </Box>
  )
}

export default Nominations

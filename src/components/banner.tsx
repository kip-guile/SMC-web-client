import React from 'react'
import { Alert, AlertIcon, AlertDescription } from '@chakra-ui/react'

interface BannerProps {
  message: string
  status: any
}

const Banner = ({ message, status }: BannerProps) => {
  return (
    <>
      <Alert status={status}>
        <AlertIcon />
        <AlertDescription>{message}</AlertDescription>
      </Alert>
    </>
  )
}

export default Banner

import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Spinner,
  Box,
  Text,
} from '@chakra-ui/react'

interface LoadingModalProps {
  isOpen: boolean
  onClose(): void
}

const LoadingModal = ({ isOpen, onClose }: LoadingModalProps) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Box
              h='20rem'
              w='100%'
              d='flex'
              flexDirection='column'
              alignItems='center'
              justifyContent='center'
            >
              <Text mb={5}>Loading...</Text>
              <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
              />
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default LoadingModal

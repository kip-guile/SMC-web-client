import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Spinner,
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
            <Spinner />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default LoadingModal

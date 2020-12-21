import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Route, Switch } from 'react-router-dom'
import './App.css'

// Pages
import Main from './pages/Main'

function App() {
  return (
    <ChakraProvider>
      <Switch>
        <Route exact path='/' component={Main} />
      </Switch>
    </ChakraProvider>
  )
}

export default App

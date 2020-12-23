import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Route, Switch } from 'react-router-dom'

// Pages
import Main from './pages/Main'
import SingleMovie from './pages/SingleMovie'

function App() {
  return (
    <ChakraProvider>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/movies/:id' component={SingleMovie} />
      </Switch>
    </ChakraProvider>
  )
}

export default App

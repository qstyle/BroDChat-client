import React, {useEffect, useState} from 'react'
import { ChakraProvider} from '@chakra-ui/react'
import { Layout } from './components'
import { connect } from 'socket.io-client'

const  App = () => {
return (
  <ChakraProvider>
    <Layout />
  </ChakraProvider>
  )
}

export default App




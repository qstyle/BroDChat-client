import React, {useState, useEffect} from 'react'
import { Flex } from '@chakra-ui/react'
import {connect} from 'socket.io-client'
import { UserList } from './UserList'

export const Layout: React.FC = () => {
  // const io = require('socket.io-client');

  const [messages, setMessages] = useState([])
  const socket = connect('ws://localhost:8000')
  // const socket = io.connect('http://website.com')
  useEffect(function() {
    socket.on('AddMessageFromServer', ({ message }) =>
      setMessages(messages => [...messages, message])
    );
  }, []);
  console.log(socket)
  
  
  return(
    <Flex width='100%' bg='blackAlpha.500' minHeight='size-1200'>
      <UserList />
    </Flex>
  )
}
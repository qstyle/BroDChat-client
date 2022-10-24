import React, {useEffect, useState} from 'react'
import { Box, useMediaQuery, Button } from '@chakra-ui/react'
import { User } from '../types'
import axios from 'axios'

import { UserListCard } from './UserListCard'

export const UserList: React.FC = () => {
  const [isMobile] = useMediaQuery('(min-width: 600px)')
  const [showList, setShowList] = useState<boolean>(isMobile)
  const [users, setUsers] = useState<User[]>([])
  const socketPort  = import.meta.env.VITE_API_URL

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios(`${socketPort}/users`)
      setUsers(response.data as User[])
    }

    fetchUsers()
  },[])





  return (
    <Box borderRadius='md' bg='gray.400'>
      <Button 
        size='xs'
        bg='yellow.100'
        onClick={()=>setShowList(!showList)}
      >
      {showList ? 'Hide Users' : 'Show users'}
      </Button>
       {showList && users.map((item)=> <UserListCard key={item.id} user={item} />)}
    </Box>
  )
}
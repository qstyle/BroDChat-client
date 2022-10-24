import React from 'react'
import { Flex, Text, Avatar } from '@chakra-ui/react'

import { User } from '../../types' 

interface UserListCardProps {
  user: User
}
 
export const UserListCard: React.FC<UserListCardProps> = ({ user } ) => {
const AvatarName = user.name.slice(0, 1)

  return(
  <Flex 
    m='1'
    p='2'
    height='40px'
    width='240px'
    alignItems='center' 
    borderRadius='lg'
    bg='yellow.100'
   >
    <Avatar size='xs' name={user.name} />
    <Text ml='3'>{user.name}</Text>
  </Flex>
)
}
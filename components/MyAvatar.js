import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { Avatar } from 'react-native-paper';
export default function MyAvatar  () {
    const [small, toggleSize] = useState(true)
    return (
      <TouchableOpacity onPress={()=> toggleSize(!small)}>
            <Avatar.Image 
                size={small ? 96 : 192} 
                source={require('../assets/neil-min.png')} 
                />
      </TouchableOpacity>
    )
  }
import React, { useState } from 'react'
import { TouchableOpacity, Image } from 'react-native'

export default function MyAvatar  () {
    const [small, toggleSize] = useState(true)
    return (
      <TouchableOpacity onPress={()=> toggleSize(!small)}>
            <Image 
                style={{width: small ? 150: 200, height: small ? 150: 200, borderRadius: 999}} 
                source={require('../assets/neil-min-min.png')} 
                />
      </TouchableOpacity>
    )
  }
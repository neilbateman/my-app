import React, { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Avatar } from 'react-native-paper';
export default function MyAvatar  () {
    const [small, toggleSize] = useState(true)
    return (
      <TouchableOpacity
        style={{paddingLeft: 10}}
        onPress={()=>toggleSize(!small)}>
          {small ? 
            <Avatar.Image size={96} source={require('../assets/neil-min.png')} />
            :
            <View
            //   style={{
            //     paddingTop: 500,
            //     justifyContent: 'center',
            //     alignItems: 'center',
            //   }}
            >
            <Avatar.Image size={96 * 2} source={require('../assets/neil-min.png')} />
            </View>
          }
  
        </TouchableOpacity>
    )
  }
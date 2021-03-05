import React, { useState } from 'react'
import { Avatar } from 'react-native-paper';
function MyAvatar  () {
    const [small, toggleSize] = useState(true)
    return (
      <TouchableOpacity
        style={{paddingLeft: 10}}
        onPress={()=>toggleSize(!small)}>
          {small ? 
            <Avatar.Image size={48} source={require('./assets/neil-min.png')} />
            :
            <View
              style={{
                paddingTop: 500,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
            <Avatar.Image size={96 *5} source={require('./assets/neil-min.png')} />
            </View>
          }
  
        </TouchableOpacity>
    )
  }
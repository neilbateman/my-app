import React, { useState } from 'react'
import {
  View,
  Image,
  Platform,
  useColorScheme,
  useWindowDimensions
 } from 'react-native';
import { A } from "@expo/html-elements";
import MyAvatar from '../components/MyAvatar'
import { images } from '../data.js'

export default function IconRow() {
    return (
        <View style={{flexDirection: "row"}} >
            {
          images.map((image, index) => (
            <View 
                key={index}>
                <A
                target="_blank"
                href={image.url}>
                    <Image
                        style={{width: 50, height: 50, paddingLeft: 100}}
                        resizeMode={'contain'}
                        source={image.image}
                    />
                </A>
            </View>
          ))
            }
        </View>
    )
}
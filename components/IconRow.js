import React from 'react'
import {
  View,
  Image,
  useWindowDimensions
 } from 'react-native';
import { A } from "@expo/html-elements";
import { images } from '../data.js'

export default function IconRow() {
    const { width, height } = useWindowDimensions()
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
                        style={{width: width / 10, height: height/ 10, paddingLeft: 100}}
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
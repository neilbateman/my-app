import React, { useState } from 'react'
import {
  Text,
  View,
  Image,
  Platform,
  useColorScheme,
  useWindowDimensions
 } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useTheme
 } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DarkModeSwitch from "expo-dark-mode-switch";
import { P, Footer, H3, A, Section, Main, H1, BR } from "@expo/html-elements";
import MyAvatar from '../components/MyAvatar'
import { bio } from '../data.js'

const images = [
{ 
        image: require("../assets/gitlab.png"),
         url: "https://gitlab.com/nomboloneil"
},
{ 
      
       image: require("../assets/github.png"),
       url: "https://github.com/neilbateman"
    
},
{
       image: require("../assets/linky.png"),
       url: "https://www.linkedin.com/in/neilbateman/"
}
]


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
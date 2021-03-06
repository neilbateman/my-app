import React, { useState } from 'react'
import {
  Text,
  View,
  Image,
  Platform,
  useColorScheme,
  useWindowDimensions
 } from 'react-native';

export default function HomeScreen(props) {
    const { width, height } = useWindowDimensions();
    console.log(height)
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: props.themeState.dark ?  CustomDarkTheme.colors.background : CustomLightTheme.colors.background,
          height: height /3
        }}
        >
          <HomeContent
            themeState={props.themeState}/>
      </View>
    );
  }

  const CustomLightTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      accent: "rgb(255, 45, 85)",
      header: "white",
      headerBorder: "rgb(224,224,224)",
    },
  };
  const CustomDarkTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      accent: "rgb(255, 55, 95)",
      header: "#000",
      headerBorder: "rgba(224,224,224, 0.3)",
    },
  };
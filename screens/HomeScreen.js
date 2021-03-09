import React from 'react'
import {
  View,
  Platform,
  ScrollView,
  useWindowDimensions
 } from 'react-native';
 import {
  DefaultTheme,
  DarkTheme,
  useTheme
 } from '@react-navigation/native';
 import { HomeContent } from '../components'

 export default function HomeScreen() {
  const theme = useTheme()
  const { height } = useWindowDimensions();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.dark ?  CustomDarkTheme.colors.background : CustomLightTheme.colors.background,
      }}
      >
      <ScrollView>
        <HomeContent style={style}/>
      </ScrollView>
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

  const style = {
    ...Platform.select({
    android: {
      rowItem: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        margin: 20,
      }
    },
    ios: {
      rowItem: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        margin: 20,
      }
    },
    default: {
      rowItem: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        margin: 20,
      }
    }
  })}
import { useState } from 'react'
import { useColorScheme } from 'react-native';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';

export default function useThemeToggler() {

    const scheme = useColorScheme()
    const [theme, setTheme] = useState(scheme === "light" ? CustomLightTheme : CustomDarkTheme)

    function toggleTheme () {
            setTheme((theme) =>
              theme.dark ? CustomLightTheme : CustomDarkTheme
            )
    }
    
    return [ theme, toggleTheme ]

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
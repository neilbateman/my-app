import * as React from 'react';
import {
  Text,
  View,
  useColorScheme,
 } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useTheme
 } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import DarkModeSwitch from "expo-dark-mode-switch";


function HomeScreen(props) {
  // const theme = useTheme();
  console.log('theme', props?.themeState)
  console.log(DarkTheme)
  return (
    <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: props.themeState.dark ?  DarkTheme.colors.background : DefaultTheme.colors.background
    }}
      >

      <Text style={{color: props.themeState.dark ? DarkTheme.colors.text : DefaultTheme.colors.text}}>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()
export default function App() {
  const scheme = useColorScheme();
  const [theme, setTheme] = React.useState(
    scheme === "light" ? CustomLightTheme : CustomDarkTheme);
  //console.log('this is theme', theme)
  //console.log(scheme)
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          children={()=><HomeScreen themeState={theme} themeSetter={setTheme}/>}
          theme={theme.dark === 'dark' ? CustomDarkTheme : CustomLightTheme}
          options={{
            headerTintColor: theme.colors.text,
           headerStyle: {
             backgroundColor: theme.colors.background,
             borderBottomColor: theme.colors.headerBorder,
           },
            headerRight: () => (
              <View style={{ flexDirection: "row", alignItems: "center", paddingRight: 10 }}>
                <DarkModeSwitch
                  value={theme.dark}
                  onChange={() => {
                    setTheme((theme) =>
                      theme.dark ? CustomLightTheme : CustomDarkTheme
                    );
                  }}
                />
                </View>
            )
          }}
          />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          />
      </Stack.Navigator>
    </NavigationContainer>
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

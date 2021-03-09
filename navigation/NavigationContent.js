import React from 'react'
import { View } from 'react-native';
import {NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DarkModeSwitch from "expo-dark-mode-switch";
import { HomeScreen, SettingsScreen } from '../screens'
import useThemeToggler from '../hooks/useThemeToggler'
const Stack = createStackNavigator()

export default function NavigationContent() {

    const [theme, toggleTheme] = useThemeToggler();
    
    return (
      <NavigationContainer theme={theme}>
        <Stack.Navigator>
          <Stack.Screen
            name={"Neil Bateman"}
            title={"Awesome"}
            children={() => <HomeScreen />}
            options={{
              headerTintColor: theme.colors.text,
              headerTitleStyle: {
                fontFamily: "Helvetica",
                fontWeight: "bold"
              }, 
              headerStyle: {
               backgroundColor: theme.colors.background,
               borderBottomColor: theme.colors.headerBorder,
             },
              headerRight: () => (
                <View style={{ flexDirection: "row", alignItems: "center", paddingRight: 10 }}>
                  <DarkModeSwitch
                    value={theme.dark}
                    onChange={() => toggleTheme(theme)}
                  />
                </View>
              ),
  
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
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
import { P, Footer, H3, A, Section, Main, H1, BR,  } from "@expo/html-elements";
import { Avatar } from 'react-native-paper';

import MyAvatar from './components/MyAvatar'
import IconRow from './components/IconRow'
import { bio } from './data.js'
const Stack = createStackNavigator()


function HomeScreen(props) {
  const theme = useTheme();
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




function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
function Bio (props) {
  //const theme = useTheme()
  return (
    <>
    <H1 style={{color: props?.themeState.colors.text}}>Hello!</H1>
    <H3 style={{color: props?.themeState.colors.text}}>{bio.hello} 
      <A
        style={{ color: "#5BA9AB"}}
        target="_blank"
        href="http://nombolo.com"
      >
        Nombolo
      </A>
    </H3>
    <H3 style={{color: props?.themeState.colors.text}}>{bio.skills}</H3>
    <H3 style={{color: props?.themeState.colors.text}}>{bio.peruse}</H3>
    </>
  )
}
function FooterContent(props) {
  const { width, height } = useWindowDimensions();
  const isMobile = width < 640;
  return (
    <H3
            style={{
              fontSize: 14,
              paddingBottom: isMobile ? 18 : 0,
              color: props.themeState.dark ? "#ABB8C3" : "#607d8b",
            }}
          >
         
            Made with{" "}
            <A
              style={{ color: props.themeState.dark ? "white" : "black", textAlign: "center" }}
              target="_blank"
              href="http://expo.io"
            >
              Expo
            </A>
            {"\n"}
            <A
              style={{ color: props.themeState.dark ? "white" : "black", textAlign: "center"  }}
              target="_blank"
              href="http://github.com/neilbateman/my-app"
            >
              Source{" "}{" "}{" "}{" "}{" "}
            </A>
            
            <A
              style={{ color: props.themeState.dark ? "white" : "black", textAlign: "center"  }}
              target="_blank"
              href="./assets/Neil_Bateman_Resume.pdf"
            >
              Resume{" "}
            </A>
          </H3>
           
  )
}
function HomeContent(props) {
  const theme = useTheme();
  const { width, height } = useWindowDimensions();
  const isMobile = width < 640;

  return (
    <View style={{ flex: 1 }}>
        <Main
          style={{
            flex: 1,
            backgroundColor: props.themeState.colors.background,
            paddingVertical: isMobile ? 50 : 0,
            flexDirection: isMobile ? "column" : "row",
          }}
        >
          <Section
            style={[
              style.rowItem,
              { paddingVertical: isMobile ? 18 : 0},
            ]}
          >
            <MyAvatar/>
            <Bio themeState={props.themeState}/> 
            <IconRow/>
          </Section>
        </Main>
        <Footer style={{ justifyContent: "center", alignItems: "center", textAlign: "center" }}>
          <FooterContent themeState={props.themeState}/>
        </Footer>
      </View>
  );
}


export default function App() {
  const scheme = useColorScheme();
  const [theme, setTheme] = useState(scheme === "light" ? CustomLightTheme : CustomDarkTheme);
 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Neil Bateman"
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

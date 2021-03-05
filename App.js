import React, { useState } from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
  Platform,
  useColorScheme,
  TouchableOpacity,
  useWindowDimensions,
  
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
import { P, Footer, H3, A, Section, Main, H1 } from "@expo/html-elements";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { projects, bio } from './data.js'

function HomeScreen(props) {
  const theme = useTheme();
  // console.log('theme', props?.themeState)
  // console.log(DarkTheme)
  return (
    <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: props.themeState.dark ?  DarkTheme.colors.background : DefaultTheme.colors.background
    }}
      >
        <HomeContent
          themeState={props.themeState}/>
    </View>
  );
}

function MyCards () {
  return (
    <>
      {
        projects.map(({title, subtitle, content, image}, index) => (
        <View key={index}>
          <Card style={{padding: 20,}}>
            <Card.Title 
              title={title} 
              subtitle={subtitle} 
              left={() =><Avatar.Image size={48} source={image} />} />
            <Card.Content>
              <Title>{title}</Title>
              <Paragraph>{content}</Paragraph>
            </Card.Content>
            <Card.Cover source={image} />
            <Card.Actions>
              <Button>Cancel</Button>
              <Button>Ok</Button>
            </Card.Actions>
          </Card>
      </View>
        ))
      }
    </>
  )
}
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

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
function Bio () {
  const theme = useTheme()
  return (
    <>
    <H1 style={{color: theme?.colors.text}}>About</H1>
    <H3 style={{color: theme?.colors.text}}>{bio.hello}</H3>
    <H3 style={{color: theme?.colors.text}}>{bio.skills}</H3>
    </>
  )
}
function HomeContent(props) {
  const theme = useTheme();
  const { width, height } = useWindowDimensions();
  const isMobile = width < 640;
  console.log(isMobile)
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
            stuff.rowItem,
            {
              paddingVertical: isMobile ? 18 : 0,
            },
          ]}
        >
        <Bio/>
          
          
        </Section>
          {/* <Section
            style={[
              styles.rowItem,
              {
                paddingVertical: isMobile ? 18 : 0,
              },
            ]}
          >
          <Text
            style={{color: props.themeState.colors.text}}>Hey</Text>


          </Section> */}
          <Section style={stuff.rowItem}>
            <Text
              style={{color: props.themeState.colors.text}}>YO</Text>
              <MyCards/>
          </Section>
        </Main>
        <Footer style={{ justifyContent: "center", alignItems: "center" }}>
          <H3
            style={{
              fontSize: 14,
              paddingBottom: isMobile ? 18 : 0,
              color: props.themeState.dark ? "#ABB8C3" : "#607d8b",
            }}
          >
            Made by{" "}
            <A
              style={{ color: props.themeState.dark ? "white" : "black" }}
              target="_blank"
              href="http://github.com/neilbateman"
            >
              Neil
            </A>
          </H3>
        </Footer>
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
           headerLeft: () => (
            <MyAvatar/>
           ),
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
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   rowItem: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     margin: 20,
//   },
//   logo: {
//     width: 66,
//     height: 58,
//     borderRadius: 50%,
//   },
// });
const stuff = {...Platform.select({
  android: {
    rowItem: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      margin: 20,
    },
    logo: {
      width: 66,
      height: 58,
    },
  },
  ios: {
    rowItem: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      margin: 20,
    },
    logo: {
      width: 66,
      height: 58,
    },
  },
  default: {
    rowItem: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      margin: 20,
    },
    logo: {
      width: 66,
      height: 58,
      borderRadius: "50%"
    },
  }
})}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
    
});
import React , {useEffect} from 'react'
import {
  View,
  Platform,
  useWindowDimensions
 } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Bio, IconRow, MyAvatar, FooterContent } from './'
import { Footer, Section, Main } from "@expo/html-elements";


export default function HomeContent() {
    const theme = useTheme();
    const { width, height } = useWindowDimensions();
    const isMobile = width < 640;
    const isFullScreen = width < 1000;
    useEffect(() => {
      if (width) {
        console.log(width)

      }
    }, [width])
    return (
      <View style={{ flex: 1 }}>
          <Main
            style={{
              flex: 1,
              backgroundColor: theme.colors.background,
              paddingVertical: isMobile ? 0 : 15,
              flexDirection: isMobile ? "column" : "row",
            }}
          >
            <Section
              style={[
                style.rowItem,
                { paddingVertical: isMobile ? 18 : 0}
              ]}
            >
              <MyAvatar/>
              <Bio/> 
              <View >
              <IconRow/>
              </View>
            </Section>
          </Main>
          <View style={{position: "absolute",
  bottom: 0,
  width: "100%",
  height: "2.5rem",      }}>
          <Footer style={{position: "absolute",
  bottom: 0,
  width: "100%",
  height: "2.5rem",      }}>
            <FooterContent/>
          </Footer>
          </View>
        </View>
    );
  }

  const style = {
    ...Platform.select({
    android: {
      rowItem: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        margin: 20,
      },    
    },
    ios: {
      rowItem: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        margin: 20,
      }, 
   },
    default: {
      rowItem: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        margin: 20,
      },
    },
    rowItem: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      margin: 20,
    },
  })}
import React from 'react'
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
  
    return (
      <View style={{ flex: 1 }}>
          <Main
            style={{
              flex: 1,
              backgroundColor: theme.colors.background,
              paddingVertical: isMobile ? 0 : 20,
              flexDirection: isMobile ? "column" : "row",
            }}
          >
            <Section
              style={[
                style.rowItem,
                { paddingVertical: isMobile ? 18 : 0}
              ]}
            >
              <View style={style.rowItem}><MyAvatar/></View>
              <View style={style.rowItem}><IconRow/></View>
            </Section>
            <Section style={style.rowItem}>
              <Bio/> 
            </Section>
          </Main>
          <Footer>
            <FooterContent/>
          </Footer>
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
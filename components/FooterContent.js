
import React, { useState } from 'react'
import {
    Text,
    View,
    Image,
    Platform,
    useColorScheme,
    useWindowDimensions,
    TouchableOpacity
   } from 'react-native';
import { P, Footer, H3, A, Section, Main, H1, BR,  } from "@expo/html-elements";

export default function FooterContent(props) {
    const { width, height } = useWindowDimensions();
    const isMobile = width < 640;
    return (
      <H3 style={{
            fontSize: 14,
            //height: height / 12,
            paddingBottom: isMobile ? 18 : 0,
            color: props.themeState.dark ? "#ABB8C3" : "#607d8b",
            textAlign: "center"
              }}
            >
              Made with{" "}
              <A
                style={{ color: props.themeState.dark ? "white" : "black", }}
                target="_blank"
                href="http://expo.io"
              >
                Expo
              </A>
              {"\n"}
              <A
                style={{ color: props.themeState.dark ? "white" : "black",  }}
                target="_blank"
                href="http://github.com/neilbateman/my-app"
              >
                Source{" "}{" "}
              </A>
              <A
                style={{ color: props.themeState.dark ? "white" : "black",  }}
                target="_blank"
                href="http://github.com/neilbateman/my-app"
              >
                Resume
              </A>
            </H3>
             
    )
  }
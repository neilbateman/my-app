
import React from 'react'
import { useWindowDimensions } from 'react-native';
import { H3, A } from "@expo/html-elements";
import { useTheme } from '@react-navigation/native';

export default function FooterContent() {

  const theme = useTheme()
  const { width } = useWindowDimensions();
  const isMobile = width < 640;

    return (
      <H3 style={{
            fontSize: 14,
            paddingBottom: isMobile ? 18 : 0,
            color: theme.dark ? "#ABB8C3" : "#607d8b",
            textAlign: "center"
              }}
            >
              Made with{" "}
              <A
                style={{ color: theme.dark ? "white" : "black", }}
                target="_blank"
                href="http://expo.io"
              >
                Expo
              </A>
              {"\n"}
              <A
                style={{ color: theme.dark ? "white" : "black",  }}
                target="_blank"
                href="http://github.com/neilbateman/my-app"
              >
                Source{" "}{" "}
              </A>
              <A
                style={{ color: theme.dark ? "white" : "black",  }}
                target="_blank"
                href="http://github.com/neilbateman/my-app"
              >
                Resume
              </A>
      </H3>
             
    )
  }
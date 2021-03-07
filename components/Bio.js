import React from 'react'
import { H3, A, H1  } from "@expo/html-elements";
import { bio } from '../data.js'
import { useTheme } from '@react-navigation/native';
export default function Bio () {
  const theme = useTheme()

    return (
      <>
      <H1 style={{color: theme.colors.text}}>Hello</H1>
      <H3 style={{color: theme.colors.text}}>{bio.hello} 
        <A
          style={{ color: "#5BA9AB"}}
          target="_blank"
          href="http://nombolo.com"
        >
          Nombolo
        </A>
      </H3>
      <H3 style={{color: theme.colors.text}}>{bio.skills}</H3>
      <H3 style={{color: theme.colors.text}}>{bio.peruse}</H3>
      </>
    )
  }
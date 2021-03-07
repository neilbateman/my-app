import React, { useState } from 'react'
import { P, Footer, H3, A, Section, Main, H1, BR,  } from "@expo/html-elements";
import { bio } from '../data.js'

export default function Bio (props) {
    return (
      <>
      <H1 style={{color: props?.themeState.colors.text}}>Hello</H1>
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
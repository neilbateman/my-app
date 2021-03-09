
import React from 'react'
import { View, useWindowDimensions } from 'react-native';
import { H3, A } from "@expo/html-elements";
import { useTheme } from '@react-navigation/native';
import { footerLinks } from '../data'
export default function FooterContent() {
  const theme = useTheme()
  const { width } = useWindowDimensions();
  const isMobile = width < 640;
  return (
    <>
      <H3 style={{
            fontSize: 14,
            paddingBottom: isMobile ? 18 : 0,
            color: theme.dark ? "#ABB8C3" : "#607d8b",
            textAlign: "center",
            alignSelf: 'center'
              }}
            >
              Made with{" "}
              <A
                style={{ color: theme.dark ? "white" : "black", }}
                target="_blank"
                href="https://necolas.github.io/react-native-web/docs/"
              >
                React Native Web
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
                href="https://developers.google.com/speed/pagespeed/insights/?url=neilbateman.surge.sh&tab=mobile"
              >
                Performance{" "}{" "}
              </A>
              <A
                style={{ color: theme.dark ? "white" : "black",  }}
                target="_blank"
                href="https://docs.google.com/document/d/e/2PACX-1vTbIs3A5sKMIFfhglULhrjFHJ4VgmihQAHOvpHh3odoCewFhufZVNY8itAaA7OHg8IxCMo4ecIgU5ti/pub"
              >
                Resume{" "}{" "}
              </A>
              <A
                style={{ color: theme.dark ? "white" : "black",  }}
                target="_blank"
                href="http://neil-html.surge.sh"
              >
                HTML Version{" "}{" "}
              </A>
      </H3>
             
    </>
  )
}


// {
//   footerLinks.map(({title, link}, index) => (
//     <View key={index}>
//       <H3 style={{
//           fontSize: 14,
//           paddingBottom: isMobile ? 18 : 0,
//           color: theme.dark ? "#ABB8C3" : "#607d8b",
//           textAlign: "center"
//             }}
//           >
//             <A
//               style={{ color: theme.dark ? "white" : "black",  }}
//               target="_blank"
//               href={link}
//             >
//               {title}
//             </A>
//       </H3>
//     </View>
//   ))
// }
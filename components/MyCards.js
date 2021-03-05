import React from 'react'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { projects } from './data.js'

export default function MyCards () {
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
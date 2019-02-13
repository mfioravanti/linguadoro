
import React from 'react'
import { View, TextInput, Button } from 'react-native'

import { Card } from '../Model/Card' 

export class CenterComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      cards: [],
      currentCard : undefined
    }
  }

  render() {
    return (
      <View>
        <TextInput placeholder='Titre du film'/>
        <Button title='Rechercher' onPress={() => {}}/>
        <Card />
      </View>
    )
  }
}



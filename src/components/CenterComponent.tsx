
import React from 'react'
import { View, TextInput, Button } from 'react-native'

import { Card } from './cards/Card';

interface IState {
  cards: Card[];
  currentCard?: Card;
}

export class CenterComponent extends React.Component<{}, IState> {

  constructor() {
    super({});
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



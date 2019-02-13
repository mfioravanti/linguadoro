import React from 'react'

import { Text, TextInput, Button, View } from 'react-native'

export class Card extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          sentenceOri: undefined,
          sentenceDest: undefined,
          category: undefined
        }
      }

    render() {
        let sentenceOriComponent;
        let sentenceDestComponent;
    
        if (this.state.sentenceOri == undefined) {
            sentenceOriComponent = <View>
                                        <TextInput placeholder='Phrase en italien' onSubmitEditing={(event) => this.setState({sentenceOri : event.nativeEvent.text})}/>
                                    </View>;
        } else {
            sentenceOriComponent = <Text>{this.state.sentenceOri}</Text>;
        }

        if (this.state.sentenceDest == undefined) {
            sentenceDestComponent = <View>
                                        <TextInput placeholder='Phrase en français' onSubmitEditing={(event) => this.setState({sentenceDest : event.nativeEvent.text})}/>
                                    </View>;
        } else {
            sentenceDestComponent = <Text>{this.state.sentenceDest}</Text>;
        }
    
        return (
          <View>
            {sentenceOriComponent}
            {sentenceDestComponent}
          </View>
        );
    }  
}
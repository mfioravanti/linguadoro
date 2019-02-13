import React from 'react'

import { Text, TextInput, View } from 'react-native'

interface IState {
  sentenceOri?: string;
  sentenceDest?: string;
  category?: string;
}

export class Card extends React.Component<{}, IState> {

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
/******************* IMPORT COMPONENTS *******************/
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { observer } from 'mobx-react';
/******************* /IMPORT COMPONENTS *******************/

@observer
export default class SimpleComponent extends Component {
  render() {
    return (
      /******************* RENDER VISUAL COMPONENTS *******************/
      <View style={styles.container}>
        <Text style={styles.textValue}>
          {/* Here we get the value from the store */}
          {this.props.store.someValue}
        </Text>
      </View>
      /******************* /RENDER VISUAL COMPONENTS *******************/
    )
  }
}

/******************* SOME STYLESHEET *******************/
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9D65F',
    marginBottom: 20,
    padding: 10,
  },
  textValue: {
    fontSize: 20,
  }
});
/******************* /SOME STYLESHEET *******************/

/******************* IMPORT COMPONENTS *******************/
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';

// Importing our brand new store
import store from './stores/SimpleStore';
// Importing a very simple component for testing purposes
import SimpleComponent from './components/SimpleComponent';
/******************* /IMPORT COMPONENTS *******************/

export default class MobxSimpleExample extends Component {
  render() {
    // Initializing counter with the default stored value
    let counter = parseInt(store.someValue);
    return (
      /******************* RENDER VISUAL COMPONENTS *******************/
      <View style={styles.container}>

        <Text style={styles.title}>
          Simple React Native Mobx Example
        </Text>

        <Text style={styles.message}>
          Here we will see how to manage our state using react-mobx
        </Text>

        <Text>Stored value:</Text>
        {/* Here we pass the store to the component as prop */}
        <SimpleComponent store={store} />

        {/* Increase the counter and pass to the store */}
        <Button
          title='Add'
          onPress={() => store.add((counter += 1))}
          style={styles.button}
        />

        {/*
          Passing the last counter value to be deleted in the store.
          Here we are not subtracting from the counter, to do so is better
          to create a function where you can do all your stuff
        */}
        <Button
          title='Delete last'
          onPress={() => store.delete(counter)}
          style={styles.button}
        />

        {/* Reset the store to the default value and set the counter to 0 */}
        <Button
          title='Reset count'
          onPress={() => store.reset(counter = 0)}
          style={styles.button}
        />

        <Text style={styles.message}>
          (Please check the source code for more details)
        </Text>

      </View>
      /******************* /RENDER VISUAL COMPONENTS *******************/
    )
  }
}

/******************* SOME STYLESHEET *******************/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  message:{
    marginTop: 6,
    fontSize: 12,
    marginBottom: 20,
  },
  button:{
    marginTop: 20,
    marginBottom: 20,
  },
});
/******************* /SOME STYLESHEET *******************/

AppRegistry.registerComponent('MobxSimpleExample', () => MobxSimpleExample);

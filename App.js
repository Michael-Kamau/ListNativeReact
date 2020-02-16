/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{useState} from 'react';
import {uuid} from 'uuidv4'
import Header from './components/Header';
import AddItem from './components/AddItem';
import ListItem from './components/ListItem';


import {
  StyleSheet,
  View,
  Text,
 FlatList,
    Alert
} from 'react-native';


const App: () => React$Node = () => {

    const [items, setItems] = useState([
        {id: uuid(), text: 'Milk'},
        {id: uuid(), text: 'Eggs'},
        {id: uuid(), text: 'Sugar'},
        {id: uuid(), text: 'Bread'},
        {id: uuid(), text: 'Juice'},
    ]);

    const deleteItem = (id) => {
        setItems(prevItems => {
            return prevItems.filter(item => item.id !== id);
        });
    };

    const addItem = (text) => {

        if (!text) {

            Alert.alert('Alert', 'Please enter an item');
        } else {
            setItems(prevItems => {
                return [{id: uuid(), text}, ...prevItems];
            });
        }


    };

  return (
    <View style={styles.container}>
      <Header title="My List" />
        <AddItem addItem={addItem}/>
        <FlatList data={items} renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem}/>}
        />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },


});

export default App;

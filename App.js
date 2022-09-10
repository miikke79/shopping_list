import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, FlatList} from 'react-native';

export default function App() {
  const [listItem, setListItem] = useState('');
  const [data, setData] = useState([]);

  const addPressed = () => { 
    setData([...data, {key: listItem}]);
    setListItem('');
  };

  const clearPressed = () => { ;
    setData([]);
  };

  return (

    <View style={styles.container}>
      <View>
        <TextInput style={styles.input} onChangeText={listItem => setListItem(listItem)} value={listItem}/>
      </View>
      <View style={styles.buttoncontainer}>
        <View>
        <Button onPress={addPressed} title="Add" />
        </View>
        <View>
        <Button onPress={clearPressed} title="Clear" />
        </View>
      </View>
      <View style={styles.shoppinglist}>
      <Text style={{ color: "blue" }}>Shopping List</Text>
      <FlatList 
      data={data}renderItem={({item}) =><Text>{item.key}</Text>} 
      keyExtractor={(item, index) => index.toString()}
      />
      </View>
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 80,
    alignItems: 'center',
    
  },

  shoppinglist: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    
  },

  buttoncontainer : {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'space-evenly'
    
  },

  input : {
    width:200  , 
    borderColor: 'gray', 
    borderWidth: 1
  }

});

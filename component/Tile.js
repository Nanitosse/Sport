import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const Tile = ({ imageSource, title }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={imageSource} style={styles.image}/>  
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
    padding: 50,
    margin: 6,



  },
  image: {

    width: 200,
    height: 350,
    margin: 10,

  },

  text: {
    justifyContent: 'center',
    alignItems: 'center',
    color: "black",
    fontSize: "bold"

  }
});


export default Tile;
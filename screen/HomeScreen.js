import { Text, View, Animated, StyleSheet, Button, ScrollView, SafeAreaView } from 'react-native';
import { Tile } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { imagesReducer } from '../features/IMAGES/imagesSlice';
import { fetchImageById } from '../features/IMAGES/imagesSlice';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../component/LoadingComponent';
import React, { useState } from 'react';


const HomeScreen = () => {
  const navigation = useNavigation();
  const images = useSelector(state => state.images)
  const dispatch = useDispatch()


  useEffect(() => {
    // dispatch(fetchImages());
    const imageId = "652224f5d51f3736c92cd29d"
    console.log('Dispatching action...');
    dispatch(fetchImageById(imageId));


  }, []);
  if (images.isLoading) {
    return <Loading />
  } else if (images.errMess) {
    return (
      <View><Text>{images.errMess}</Text></View>
    )
  }
  console.log('Images Array', images.imagesArray);


  return (
    <View style={{ alignItems: 'center' }}>
      <ScrollView style={{ paddingVertical: 10 }}>
        {images.imagesArray.map((item, index) => {
          console.log('Item ID:', item._id); // Add this line for debugging
          return (
            <Tile
              key={item._id} 
              imageSrc={{uri: item._id ? `http://172.20.10.4:3000/images/${item._id}` : 'fallback-url'}}
              featured
              title={item.title}
              height={230}
              onPress={() => navigation.navigate('Intake')}
            />
          );
        })}
      </ScrollView>
    </View>
  );

}





export default HomeScreen;
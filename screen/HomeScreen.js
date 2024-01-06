import { Text, View, Animated, StyleSheet, Button, ScrollView, SafeAreaView } from 'react-native';
import { Tile } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import  imagesReducer  from '../features/IMAGES/imagesSlice';
import { fetchImageById } from '../features/IMAGES/imagesSlice';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../component/LoadingComponent';



const HomeScreen = () => {
  const navigation = useNavigation();
  const image = useSelector(state => state.image)
  const dispatch = useDispatch()


  useEffect(() => {
   
    const imageId = "652224f5d51f3736c92cd29e";
    console.log('Dispatching action...');
    dispatch(fetchImageById(imageId));


  }, [dispatch]);
  console.log('Current Redux state:', image);

  if (image.isLoading) {
    return <Loading />
  } else if (image.errMess) {
    return (
      <View><Text>{image.errMess}</Text></View>
    )
  }
  console.log('Images Array', image.imagesArray);


  return (
    <View style={{ alignItems: 'center' }}>
      <ScrollView style={{ paddingVertical: 10 }}>
        {image.imagesArray.map((item, index) => {
          console.log('Item ID:', item._id); 
          return (
            <Tile
              key={item._id} 
              imageSrc={{uri: item._id ? `http://172.20.10.3:3000/image/${item._id}` : 'fallback-url'}}
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
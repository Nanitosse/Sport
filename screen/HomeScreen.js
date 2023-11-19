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
    const imageId='ObjectId("6526fe7ca646e5298058f84c")'
    dispatch(fetchImageById(imageId));

  }, []);
  if (images.isLoading) {
    return <Loading />
  } else if (images.errMess) {
    return (
      <View><Text>{images.errMess}</Text></View>
    )
  }


  
  return (
    <View style={{ alignItems: 'center' }}>
      <ScrollView style={{ paddingVertical: 10 }}>
        {images.imagesArray.map((item, index) => (
          <Tile
            key={item._id} 
            imageSrc={{ uri: `http://172.20.10.4:3000/${item.url}` }}
            featured
            title={item.title}
            height={230}
            onPress={() => navigation.navigate('Intake')}
          />
        ))}
      </ScrollView>
    </View>
  );

}
// const HomeScreen = () => {
//   const navigation = useNavigation();
//   const [images, setImages] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const response = await fetch('http://localhost:3000/images/');
//         if (!response.ok) {
//           throw new Error('Network request failed');
//         }
//         const data = await response.json();
//         setImages(data);
//         setIsLoading(false);
//         setError(null);
//       } catch (error) {
//         console.error('Error fetching images:', error);
//         setIsLoading(false);
//         setError('Failed to fetch images');
//       }
//     };

//     fetchImages();
//   }, []);

//   if (isLoading) {
//     return <Loading />;
//   } else if (error) {
//     return (
//       <View>
//         <Text>{error}</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={{ alignItems: 'center' }}>
//       <ScrollView style={{ paddingVertical: 10 }}>
//         {images.map((item, index) => (
//           <Tile
//             key={item._id}
//             imageSrc={{ uri: `http://localhost:3000/${item.url}` }}
//             featured
//             title={item.title}
//             height={230}
//             onPress={() => navigation.navigate('Intake')}
//           />
//         ))}
//       </ScrollView>
//     </View>
//   );
// };




export default HomeScreen;
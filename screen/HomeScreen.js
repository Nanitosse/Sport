import { Text, View, Animated, StyleSheet, Button, ScrollView, SafeAreaView } from 'react-native';
import { Tile } from '@rneui/themed';







const HomeScreen = () => {
  return (
    <>
      <View style={{ alignItems: 'center' }}>
        <ScrollView style={{ paddingVertical: 10 }}>
          <Tile
            imageSrc={require('../assets/images/gym.jpg')}
            featured
            title='Weights Training'
            caption=" Muscle Mass and Power"
            height={230}
          />
          <Tile
            imageSrc={require('../assets/images/calisImg.jpg')}
            featured
            title='Body Weight Training'
            caption=" Muscle Definition and Strength"
            activeOpacity={1}
            height={230}
          />
          <Tile
            imageSrc={require('../assets/images/nutrition.jpg')}
            featured
            title='Nutrition'
            caption="Productive Intake"
            height={230}
          />
        </ScrollView>
      </View>
    </>
  )

}



export default HomeScreen;
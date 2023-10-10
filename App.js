// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import Main from "./screen/MainComponent";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import Loading from './component/LoadingComponent';
import Splashscreen from './screen/SplashScreen';


export default function App() {
  return (

    <Provider store={store}>

      <ImageBackground
        source={require('./assets/images/soccer.png')}
        style={{
          flex: 1,
          // resizeMode:'cover',
          justifyContent: 'center',

        }}

      >
        <PersistGate loading={<Loading />} persistor={persistor}>
          <NavigationContainer theme={MyTheme}>
          
            <Main />
          </NavigationContainer>
        </PersistGate>
      </ImageBackground>

    </Provider>



  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    backgroundColor: 'black',
    textAlign: 'center',
    alignItems: "center"

  },


});

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background: 'transparent',
  },
};

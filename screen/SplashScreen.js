import { Text, View, SafeAreaView,Animated } from "react-native";
import { useEffect } from "react";


const SplashScreen = ({navigation}) => {
  
    useEffect(() => {

        setTimeout(()=>{
            navigation.navigate('Home')
        } ,8000)


    },[])

    return (
        <SafeAreaView>
            <View style={{justifyContent:'center', alignItems:'center', marginTop:300}}>
                <Text >SPLASHSCREEN</Text>
            </View>
        </SafeAreaView>
    )

}

   



export default SplashScreen;
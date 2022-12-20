import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { color } from "react-native-reanimated";



const Loading = () => {
    return (
        <View style={styles.loadingView}>
            <ActivityIndicator size='large' color= "#00ff00"/>
            <Text style={styles.loadingText} >.......</Text>
        </View >
    )

}
const styles = StyleSheet.create({
    loadingView: {
        alignItem: 'center',
        justifyContent: 'center',
        flex: 1,
        
    },
    loadingText: {
        color: "" ,
        fontSize: 14,
        fontWeight: 'bold'
    }

})


export default Loading;
import {StatusBar} from 'expo-status-bar'
import {SafeAreaView, StyleSheet} from 'react-native'
import {WebView} from 'react-native-webview'

export default function App() { 
    const url = "https://ulizaservices.com/"
    // gp5u-yCMULDuC@4b
    return (
        <SafeAreaView style={
            {
                flex: 1,
                paddingTop: 40
            }
        }>
            <StatusBar style='auto'/>
            <WebView source={
                    {uri: url}
                }
                onLoad={
                    () => {
                        console.log("Loading")
                    }
                }
                style={
                    styles.container
                }/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

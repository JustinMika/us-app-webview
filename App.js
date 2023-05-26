import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, StyleSheet} from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
    return (
        <SafeAreaView>
            <StatusBar style="auto" hidden/>
            <WebView source={
                    {uri: 'https://github.com/facebook/react-native'}
                }
                style={
                    {marginTop: 20}
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
});

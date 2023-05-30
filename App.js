import {StatusBar} from 'expo-status-bar'
import {SafeAreaView, StyleSheet} from 'react-native'
import {WebView} from 'react-native-webview'
import { Platform } from 'react-native';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
// import PushNotification from 'react-native-push-notification';
// import notifee, { EventType } from '@notifee/react-native';

export default function App() { 
    if (Platform.OS === 'ios') {
        PushNotificationIOS.setApplicationIconBadgeNumber(3);
      } else if (Platform.OS === 'android') {
      }
    //   notifee.getBadgeCount().then(count => console.log('Current badge count: ', count));
    //   notifee.setBadgeCount(10).then(() => console.log('Badge count removed'));
    const url = "https://ulizaservices.com/"
    // gp5u-yCMULDuC@4b
    return (
        <SafeAreaView style={
            {
                flex: 1,
                // paddingTop: 40
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

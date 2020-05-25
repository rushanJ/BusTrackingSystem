import React, { memo,useState } from 'react'
import { View, WebView, StyleSheet }

from 'react-native'

const WebViewExample = () => {
   const [user, setUser] = useState({ value: '', error: '' });
   AsyncStorage.getItem('user').then((value) => setUser({ value: value, error: '' }));
   return (
      <View style = {styles.container}>
         <WebView
         source = {{ uri:
         'http://critssl.com/BusTrackingSystem/driverMap.php?id=' }}
         />
      </View>
   )
}
export default WebViewExample;

const styles = StyleSheet.create({
   container: {
      height: "100%",
   }
})
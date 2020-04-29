import React, { Component } from 'react'
import { View, WebView, StyleSheet }

from 'react-native'
const WebViewExample = () => {
   return (
      <View style = {styles.container}>
         <WebView
         source = {{ uri:
         'https://www.google.com/maps/@7.3199726,80.3111117,16z' }}
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
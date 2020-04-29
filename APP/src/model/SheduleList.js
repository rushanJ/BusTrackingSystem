import React, { Component } from 'react';
import { AsyncStorage,Text, TouchableOpacity,Image, View, StyleSheet, ScrollView } from 'react-native';
const axios = require('axios');
class ScrollViewExample extends Component {
   state = {
      names: [
         {'name': '7.30 AM', 'id': 1},
         {'name': '7.40 AM', 'id': 2},
         {'name': '8.30 AM', 'id': 3},
         {'name': '9.00 AM', 'id': 4},
         {'name': '10.30 AM', 'id': 5},
         {'name': '12.00 PM', 'id': 6},
         {'name': '1.30 PM', 'id': 7},
         {'name': '3.00 PM', 'id': 8},
         {'name': '4.30 PM', 'id': 9},
         {'name': '5.00 PM', 'id': 10},
         {'name': '5.30 PM', 'id': 11},
         {'name': '6.00 PM', 'id': 12},
         {'name': '7.30 PM', 'id': 13},
         
      ],
      id:'null',
   }
         componentDidMount =() =>{
            AsyncStorage.getItem('id', (err, result) => {this.setState({ id: result,});});
            console.log(this.state.id);
            axios.get('http://192.168.8.100/BusTrackingSystem/API/driverShedule.php?id=1&date=2020-02-27')
      .then(function (response) {
         // handle success
         console.log(response.data);
      })
      .catch(function (error) {
         // handle error
         console.log(error);
      })
      .then(function () {
         // always executed
      });
   }
   selectShedule = (item) => {
      alert("Started")
   }
   render() {
      return (
         <View  style = {styles.Scrollcontainer}>
            <Text style = {styles.TopicText}>
               Select A Shedule
            </Text>
            <ScrollView   >
               {
                  this.state.names.map((item, index) => (
                     <TouchableOpacity
                     key = {item.id}
                     style = {styles.container}
                     onPress = {() => this.selectShedule(item)}>
                     <Text style = {styles.text}>
                        {item.name}
                     </Text>
                  </TouchableOpacity>
                  ))
               }
            </ScrollView>
         </View>
      )
   }
}
export default ScrollViewExample

const styles = StyleSheet.create ({
   container: {
      padding: 10,
      marginTop: 30,
      backgroundColor: '#a9e9b1',
      flexDirection: 'column',
      justifyContent: 'space-between',
      // alignItems: 'flex-end',
      //alignItems: 'flex-start',
   },
   Scrollcontainer: {
      marginTop: 50,
      
   },
   TopicText: {
      fontSize: 30,
      textAlign: 'center', 
      color: 'red', 
      marginBottom:30,
   },
   text: {
      padding: 10,
      width: 300,
      height: 50,
      color: 'blue',
      fontSize: 20,
   }
})
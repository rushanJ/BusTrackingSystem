import React, { Component } from 'react'
import {  View, Text, Switch, StyleSheet} from 'react-native'
import Button from '../components/Button';
import Columns from 'react-native-columns'
class SwichExample extends Component {
   state = {
      initialSpeed: '0',
      maxSpeed: '0',
      lastPosition: 'unknown',
   }
//    watchID: ?number = null;
   componentDidMount = () => {
      navigator.geolocation.getCurrentPosition(
         (position) => {
            const initialSpeed = JSON.stringify(position.coords.speed);
            this.setState({ initialSpeed });
         },
         (error) => alert(error.message),
         { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
    //   this.watchID = navigator.geolocation.watchPosition((position) => {
    //      const lastPosition = JSON.stringify(position);
    //      this.setState({ lastPosition });
    //   });
   }

   getLocaton = () => {
    navigator.geolocation.getCurrentPosition(
       (position) => {
          const initialSpeed = JSON.stringify(position.coords.speed);
          this.setState({ initialSpeed });
       },
       (error) => alert(error.message),
       { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
    
 }
   componentWillUnmount = () => {
      navigator.geolocation.clearWatch(this.watchID);
   }
   leftCol = (

      <Text> 
        This is the left columnm
      </Text>
  
  )
   render() {
       this.getLocaton();
      return (
         <View style = {styles.container}>
            {/* <Text style = {styles.boldText}>
              Speed:
            </Text> */}

        <Columns
        initialLeft={ 0.5 }
        max={ 85 }
        min={ 15 }
        leftCol={ this.leftCol }
        // rightCol={ <SomeComponent /> }
      />

            {/* <Text style = {styles.maxSpeedText}>
                MaxSpeed
            </Text>
            <Text style = {styles.maxSpeedText}>
               {this.state.initialSpeed}
                Kmph
            </Text>
            <Text style = {styles.LastLoginText}>
                Last Login
            </Text>
            <Text style = {styles.LastLoginText}>
               {this.state.initialSpeed}
                Kmph
            </Text>
          
          
            
            <Text style = {styles.mainSpeedText}>
               {this.state.initialSpeed}
            
            </Text>
            <Text style = {styles.kmphMain}>
              
               Kmph
            </Text>
            
            */}
         </View>
      )
   }
}
export default SwichExample

const styles = StyleSheet.create ({
   container: {
      flex: 1,
    //   alignItems: 'center'
     
   },
   mainSpeedText: {
      fontSize: 150,
      textAlign: 'center', 
      color: 'red', 
       marginTop: 50
   },
   maxSpeedText: {
    //flex: 1, 
    // flexDirection: 'row',
    fontSize: 15,
    color: 'red', 
    textAlign: 'left', 
    // alignSelf: 'stretch',
     marginTop: 10
 },
 LastLoginText: {
//    // flex: 1, 
//     flexDirection: 'row-reverse',
    fontSize: 15,
    color: 'red', 
    textAlign: 'right', 
     alignSelf: 'stretch',
     marginTop: 10
 },
   kmphMain: {
    fontSize: 90,
    color: 'red',
 }
})

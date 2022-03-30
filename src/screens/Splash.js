import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  StatusBar,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Switch,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import SplashScreen from 'react-native-splash-screen';
import * as Animatable from 'react-native-animatable';


export default function Splashing(props) {

  

  useEffect(() => {
    setTimeout(() => props.navigation.navigate("slider") , 2000);
  }, []);


  return (
    <TouchableWithoutFeedback >
      <View style={styles.container}>
        <Animatable.Text style={styles.welcome} animation="slideInDown"  iterationCount={1} direction="alternate">welcome to</Animatable.Text>
        <Animatable.Text style={styles.datenight} animation="slideInDown"  iterationCount={1} direction="alternate">Date Night</Animatable.Text>
        <Animatable.Text style={styles.datingText} animation="slideInDown"  iterationCount={1} direction="alternate">Dating just got fun again!</Animatable.Text>

        <Animatable.Image  style={styles.img} delay={-1000} animation="zoomIn"  source={require('../assets/imglogo.png')}
        >
          {/* <Image
            style={styles.tinyLogo}
            source={require('./src/imglogo.png')}
          /> */}
        </Animatable.Image>

        <Animatable.Text style={styles.getStarted} animation="slideInUp" iterationCount={1} direction="alternate">Get started in just</Animatable.Text>
        <Animatable.Text style={styles.steps} animation="slideInUp"  iterationCount={1} direction="alternate"><Text style={{ color: 'red',
    fontSize: 25,
    fontFamily: 'Poppins',}}>4</Text> simple steps...</Animatable.Text>
      </View>

    </TouchableWithoutFeedback>

  )
}

const styles = StyleSheet.create({
  img: {
    width: 150,
    height: 150,
    marginTop: 100,
    marginBottom:100,
    alignSelf: "center",
    resizeMode:'contain'

  },
  steps: {
    color: 'white',
    fontSize: 23,
    fontFamily: 'Poppins',

    // marginTop: 180,
    // marginBottom: 10,
    alignSelf: "center",
    alignContent: "center",
    

  },
  getStarted: {
    color: 'white',
    fontFamily: 'Poppins',
    fontSize: 23,
   
    // marginBottom: -230,
    alignSelf: "center",
  

  },
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingBottom:40,
    paddingTop:40

  },
  welcome: {
    color: 'white',
    fontFamily: "Poppins-Regular", 

    fontSize: 23,

    alignSelf: "center",
    alignContent: "center",
   

  },
  datenight: {
    color: '#FF2B25',
    fontSize: 63,
    
    fontFamily: "Poppins-Bold", 
   
    alignSelf: "center",
    alignContent: "center",
   

  },
  datingText: {
    color: '#A5A5A5',
    fontSize: 23,
    fontFamily: "Poppins", 
    
    alignSelf: "center",
    alignContent: "center",
    

  }

});
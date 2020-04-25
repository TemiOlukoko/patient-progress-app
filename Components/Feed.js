/*React Native TimeLine ListView / Flatlist*/
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Button, Image} from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
import add from '../assets/add.png';
import Jane from '../assets/Jane.png';

export default class BasicTimeLine extends Component {
  constructor() {
    super();
    this.data = [
      {
        time: '12:45',
        title: '08/07/2020',
        description:
          'Temperature of 38C.',
        circleColor: '#58ACA8',
        lineColor: '#58ACA8',
        fontSize: 5,
      },
      {
        time: '17:50',
        title: '10/07/2020',
        description:
          'Oxygen therapy administered.',
        circleColor: '#58ACA8',
        lineColor: '#58ACA8'
      },
      {
        time: '03:00',
        title: '14/07/2020',
        description:
          'Normal blood pressure.',
        circleColor: '#58ACA8',
        lineColor: '#58ACA8'
      },
      {
        time: '09:00',
        title: '18/07/2020',
        description:
          'Weight: 75 kg.',
        circleColor: '#58ACA8',
        lineColor: '#58ACA8'
      },
      {
        time: '14:00',
        title: '23/07/2020',
        description:
          'Normal glucose levels.',
        circleColor: '#58ACA8',
        lineColor: '#58ACA8'
      },
      {
        time: '13:00',
        title: '26/07/2020',
        description:
          'Heart rate: 80 bpm - Normal heart rate.',
        circleColor: '#58ACA8',
        lineColor: '#58ACA8',
      },
    ];
  }

  render() {
    return (
        <ScrollView style = {{width:'100%'}}>
            
        <View style={styles.container}>
            <Timeline style={{ flex: 1 }} data={this.data} descriptionStyle={{ color: 'black', fontSize:18}}/>
        </View>
        <View style={styles.add}>
        <TouchableOpacity onPress={()=> {alert('Requesting update')}}>
            <Image source={add}/>
        </TouchableOpacity>
        </View>
        <View style={styles.Button}>
            <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}} onPress={()=> {alert('Requesting update')}}>
            <Text style={{fontSize:16, fontFamily: 'Bold', color: '#000000'}}>Request an update</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.Jane}>
            <Image source={Jane}/>
        </View>
    <View style={styles.infoBox}><Text style = {{fontSize: 15, fontFamily: 'Bold', color: '#000000', textAlign: 'center'}}>Jane Doe{"\n"}{"\n"}NHS NUMBER: 000 000 0000{"\n"}{"\n"}PROGRES: stable</Text>
        </View>
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //padding: 10,
    backgroundColor: '#FFFFFF',
    marginBottom: 160,
    marginTop: 75,
    paddingBottom: 190,
    paddingTop: 55,
    paddingHorizontal: 20,
},
  
Button: {
    marginTop: -35,
    marginBottom: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 40,
    paddingVertical: 10,
    paddingHorizontal: 70,
    marginLeft: 70,
    marginRight: 40,
    //borderColor: 'black',
    borderWidth: 0.3,
    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: 5,},
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 0,
    
  },
  add: {
    marginTop: -320,
    marginLeft: 320,
    flex: 1,
    //position: 'absolute',
    zIndex: 1
    //zIndex: 999
    //marginBottom: 5,
    //marginLeft: 70,
  },
  Jane: {
    paddingTop:5,
    marginTop: -716,
    marginBottom: 700,
    alignSelf: 'flex-end',
    //marginRight:40,
  },
  infoBox: {
    paddingTop: 29,
    marginTop: -830,
    marginLeft: 2,
    width: 298,
    height: 120,
    marginBottom: 700,
    backgroundColor: '#FFFFFF'  
  }
});
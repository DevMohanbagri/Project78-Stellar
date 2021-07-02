import React, {Component} from 'react';
import { StyleSheet, Text, View , TextInput, SafeAreaView} from 'react-native';
import { WebView } from 'react-native-webview';

export default class StarMap extends Component{
    constructor(){
      super()
      this.state ={
          location: {},
          latitude: '',
          longitude:''
      }
    }

   /* getStarsLocation=()=>{
        axios
            .get("https://virtualsky.lco.global/embed/index.html?longitude=77.102493&latitude=28.704060&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true")
            .then(response=>{
                this.setState ({
                    location: response.data
                })
            })
            .catch(error => {
                alert(error.message)
            })
        }

        componentDidMount(){
           // this.getStarsLocation()
        }*/

    render(){
        const {longitude, latitude}  = this.state;
        const path = "https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true&projection=stereo&showdate=false&showposition=false"

        return(
            <View>
                <SafeAreaView/>
                <TextInput
                   style= {{height: 40, borderColor: "gray", borderWidth: 1}}
                   placeholder = "Enter your latitude here"
                   placeholderTextColor = "#fff#00000"
                   onChangeText={(text)=>{
                       this.setState({
                           latitude: text
                       })
                   }}
                />

                <TextInput
                   style= {{height: 40, borderColor: "gray", borderWidth: 1}}
                   placeholder = "Enter your longitude here"
                   placeholderTextColor = "#fff#00000"
                   onChangeText={(text)=>{
                       this.setState({
                           longitude: text
                       })
                   }}
                />

             <WebView
              scalesPageToFit= {true}
              source = {{uri: path}}
              style = {{margin: 20}}
             />
            </View>
        )
    }
}
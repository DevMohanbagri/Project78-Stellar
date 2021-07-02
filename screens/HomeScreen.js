import React, {Component} from 'react';
import { StyleSheet, 
    Text, 
    View, 
    TouchableOpacity, 
    Platform, 
    StatusBar,
    Image, 
    ImageBackground,
    SafeAreaView
} from 'react-native';

export default class HomeScreen extends Component{
    render(){
        return(
            <View>
            <SafeAreaView>

            <ImageBackground source={require('../assets/stars.gif')} style={styles.backgroundImage}></ImageBackground>

            <View style={styles.titleBar}>
                    <Text style =  {styles.titleText}>Stellar App</Text>
            </View>

                <TouchableOpacity style = {styles.routeCard} 
                onPress={()=>{
                    this.props.navigation.navigate("SpaceCrafts")
                }}>
                    <Text style = {styles.routeText}>SpaceCrafts</Text>
                    <Image source = {require('../assets/space_crafts.png')} style ={styles.iconImage} />
                </TouchableOpacity>


                <TouchableOpacity style = {styles.routeCard} 
                onPress={()=>{
                    this.props.navigation.navigate("StarMap")
                }}>
                    <Text style = {styles.routeText}>StarMap</Text>
                    <Image source = {require('../assets/star_map.png')} style ={styles.iconImage} />
                </TouchableOpacity>

                <TouchableOpacity style ={styles.routeCard}
                 onPress={()=>{
                    this.props.navigation.navigate("DailyPic")
                 }}>
                    <Text style = {styles.routeText}>DailyPic</Text>
                    <Image source = {require('../assets/daily_pictures.png')} style ={styles.iconImage} />
                </TouchableOpacity>

            </SafeAreaView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    }, 

    drawoidSafeArea:{
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0  ,
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },

    titleText:{
        fontWeight: 'bold',
        fontSize: 40,
        color: 'white'

        
    },
    routeCard: {
        flex: 0.25,
        marginLeft: '25%',
        marginRight: '25%',
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: 'white',
      
    },
    routeText:{
        fontSize: 35,
        fontWeight: "bold",
        color: "black",
        marginTop: 75,
        paddingLeft: 30
    },
    
    backgroundImage:{
        flex : 1,  
        resizeMode: 'cover',
    },
    iconImage: {
        position: "absolute",
        height: 200,
        width: 200,
        resizeMode: "contain",
        right: 20,
        top: -40,

    }
    
  });
  
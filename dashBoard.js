import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet, SafeAreaView, ScrollView, StatusBar, Image, ImageBackground, TouchableOpacity
} from "react-native";

import Caraousel from "react-native-snap-carousel";

import appIcon from './res/appIcon.png'
import nwh from './res/dashboard/nwh.jpg'
import knight from './res/dashboard/knight.jpg'
import madness from './res/dashboard/madness.jpg'
import dumb from './res/dashboard/dumb.jpg'

import rick from './res/dashboard/RickRollLogo.png'
import marvel from './res/dashboard/Marvel.jpeg'
import vr from './res/dashboard/Vr.png'

import { useNavigation } from '@react-navigation/native';
import { VrNavigaton } from "./vrNavigator";

state={
    categories:[
      {
      id:1,
      name:"cari cature"
    },
    {
      id:2,
      name:"sketch"
    },
    {
      id:3,
      name:"painting"
    },
    {
      id:4,
      name:"color"
    },
  ],
  cards: [
    {
      image: nwh,
      id: 1,
      title: "walking like a king down the hallways"
    },
    {
      image: madness,
      id: 2,
      title: "blue oil paint"
    },
    {
      image: dumb,
      id: 3,
      title: "green artist paint"
    },
    {
      image: knight,
      id: 4,
      title: "red blood"
    }
  ],

  artists: [
    {
      image: marvel,
      id: 1,
      source:true,
      type:"viroTheatre",
      skills: "Doctor Strange",
      name: "Marvel"
    },
    {
      image: vr,
      id: 2,
      source:null,
      type:"cottage",
      skills: "View 3D objects",
      name: "V-Room"
    },
    {
      image: rick,
      id: 3,
      source:false,
      type:"viroTheatre",
      skills: "Movie theatre",
      name: "V-Theatre"
    }
  ]
}


const renderItem = ({ item, index, navigation }) => {
    console.log(item)
    //console.log(item.name)
    console.log(index)
        return (
            <View style={{ width: 300, height: 415 }}>
              <ImageBackground source={item.image} style={styles.image} imageStyle={{ borderRadius: 15 }} resizeMode="cover">
              </ImageBackground>
            </View>
        )
}

export const Dashboard = ({navigation}) => {

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#F2F2F7" }}>
        <ScrollView style={{ paddingTop: 10 }}>

          <View style={{ paddingHorizontal: 24 }}>

            <View style={{ paddingTop: 12, flexDirection: "row", justifyContent: 'space-between' }}>
              <View>
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Movie Night</Text>
              </View>
              <View style={{ height: 37, width: 37, borderRadius: 37 / 2, borderColor: "#ddd" }}>
                <Image source={appIcon} style={{ height: 45, width: 45, borderRadius: 37 / 2, borderColor: "#ddd" }} resizeMode="cover" />
              </View>
            </View>


            <View style={{ paddingTop: 20 }}>
              <View>
                <Caraousel
                  ref={c => { this._carousel = c }}
                  renderItem={renderItem}
                  sliderWidth={350}
                  itemWidth={290}
                  loop={true}
                  autoplay={true}
                  autoplayDelay={500}
                  autoplayInterval={3000}
                  layout={"stack"}
                  data={this.state.cards}
                />
              </View>
            </View>
            <View style={{ paddingTop: 30 }}>
            <View
                style={{
                  backgroundColor: "white",
                  borderRadius: 15,
                  paddingBottom: 20,
                }}
              >
                 {this.state.artists.map(artist =>  (
                   
                   <View
                   key={artist.id}
                   style={{
                     flexDirection: "row",
                     justifyContent: "space-between",
                     paddingLeft: 30,
                     paddingTop: 18,
                     alignItems: "center"
                   }}
                 >

                   <View style={{flexDirection:'row'}}>
                   <Image
                        source={artist.image}
                        style={{
                          height: 50,
                          width: 50,
                          borderColor:'grey',
                          borderWidth:1,
                          backgroundColor: "#ddd",
                          borderRadius: 50 / 2
                        }}
                        resizeMode="cover"
                      />
                      <View
                        style={{
                          flexDirection: "column",
                          paddingLeft: 13,
                          paddingTop: 7
                        }}
                      >
                        <Text style={{ fontSize: 17, fontWeight: "500" }}>
                          {artist.name}
                        </Text>
                        <Text style={{ fontSize: 14, color: "#A7A7A7" }}>
                          {artist.skills}
                        </Text>
                      </View>
                     </View>

                     <View style={{ paddingRight: 30 }}>
                     <TouchableOpacity onPress={()=>navigation.navigate('VrMode',{name:artist.type,source:artist.source})}>
                      <View
                        style={{
                          height: 25,
                          width: 61,
                          borderRadius: 10,
                          backgroundColor: "#F2F2F7",
                          alignItems: "center",
                          justifyContent: "center"
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 17,
                            fontWeight: "500",
                            color: "#007AFF"
                          }}
                        >
                          View
                        </Text>
                      </View>
                      </TouchableOpacity>
                    </View>
                   </View>
                 ))}
                </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  categoryBox: {
    height: 28,
    width: 89,
    borderWidth: 0.7,
    borderColor: "#2c2c2e",
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10


  },
  image: {
    width: 292,
    height: 411,
    borderRadius: 15
  }
});
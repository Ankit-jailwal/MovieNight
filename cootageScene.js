'use strict';

import React, { Component } from 'react';
import {StyleSheet} from 'react-native';

import {
  ViroDirectionalLight,
  ViroAmbientLight,
  ViroOrbitCamera,
  ViroScene,
  Viro3DObject,
  ViroText,
  ViroSkyBox,
  ViroNode,
  ViroMaterials,
} from '@viro-community/react-viro';

var createReactClass = require('create-react-class');

var MainScene = createReactClass({
  getInitialState() {
    return {

    };
  },

  render: function() {
    return (
     <ViroScene style={styles.container}>
        <ViroSkyBox source={{nx:require('./res/grid_bg.jpg'),
                             px:require('./res/grid_bg.jpg'),
                             ny:require('./res/grid_bg.jpg'),
                             py:require('./res/grid_bg.jpg'),
                             nz:require('./res/grid_bg.jpg'),
                             pz:require('./res/grid_bg.jpg')}} />
        <ViroOrbitCamera position={[0, 0, -0]} active={true} focalPoint={[0, 0, -1]} />
        <ViroDirectionalLight direction={[0, 0, -1]} color="#ffffff" />

        <ViroAmbientLight color="#aaaaaa" />

         <ViroNode position={[0, -1, -6]} >
            <Viro3DObject source={require('./res/cottage/cottage_obj.obj')}
                      // resources={[require('./res/cottage/cottage_obj.mtl')]}  
                      materials={["hentai"]} scale={[0.5,0.5,0.5]} highAccuracyEvents={true} type="OBJ" />
       </ViroNode>
       <ViroText text="Toon Girl" position={[0.0, 2, -3]} style={styles.textStyle}
                 transformBehaviors={["billboardY"]}/>
     </ViroScene>
    );
  },
});

var materials = ViroMaterials.createMaterials({
   hentai: {
     lightingModel: "Blinn",
     diffuseTexture: require('./res/cottage/cottage_diffuse.png'),
     writesToDepthBuffer: true,
     readsFromDepthBuffer: true,
   },
});

var styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 18,
    color: '#FFFFFF',
  },
});

module.exports = MainScene;

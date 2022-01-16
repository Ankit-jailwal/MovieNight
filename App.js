import React from 'react';
import {
  ViroVRSceneNavigator,
} from '@viro-community/react-viro';

var vrScenes = {
  'hentaiCharacter': require('./cootageScene'),
  'viroTheatre': require('./viroTheatre')
}


export default () => {
  return (
    <ViroVRSceneNavigator
      initialScene={{
        scene: vrScenes['viroTheatre'],
      }}
      vrModeEnabled={true}
      pbrEnabled = {true}  
      />
  );
};
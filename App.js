import React from 'react';
import {
  ViroVRSceneNavigator,
} from '@viro-community/react-viro';

var vrScenes = {
  'hentaiCharacter': require('./cootageScene'),
}


export default () => {
  return (
    <ViroVRSceneNavigator
      initialScene={{
        scene: vrScenes['hentaiCharacter'],
      }}/>
  );
};
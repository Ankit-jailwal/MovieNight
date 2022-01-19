import React from 'react';
import {
  ViroVRSceneNavigator,
} from '@viro-community/react-viro';
var vrScenes = {
  'cottage': require('./cootageScene'),
  'viroTheatre': require('./viroTheatre')
}


export const VrNavigaton = ({route, navigation}) => {
    const { name, source } = route.params;
    if(name == 'viroTheatre'){
  return (
    <ViroVRSceneNavigator
      initialScene={{
        scene: vrScenes[name],
      }}
      viroAppProps= {source}
      vrModeEnabled={true}
      pbrEnabled = {true}  
      />
  );
    }
    else{
        return (
            <ViroVRSceneNavigator
              initialScene={{
                scene: vrScenes[name],
                passProps: {
                     example : true
                }
              }}
              vrModeEnabled={true}
              pbrEnabled = {true}  
              />)
    }
};

import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Home from '../00-Home/Home';
import Model3DScreen from '../17-React-Native-3D-Loading-Model/Model3DScreen';
import Character3DScreen from '../18-React-Native-3D-Character-With-Animation/Character3DScreen';

export type RootStackParamList = {
  Home: undefined;
  Model3D: undefined;
  Character3D: undefined;
};

const RootNavigator = () => {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Model3D"
        component={Model3DScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Character3D"
        component={Character3DScreen}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;

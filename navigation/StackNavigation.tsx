import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../src/screens/HomeScreen';

const StackNavigation = () => {
  const stack = createStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <stack.Screen name={'Home'} component={HomeScreen} />
        <stack.Screen name={'SecondHome'} component={HomeScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;

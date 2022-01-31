import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Description from './src/screens/Description';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  const stack = createStackNavigator();

  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <stack.Screen
          name={'Home'}
          component={HomeScreen}
          // options={{
          //   title: '🎉 Welcome To The Wonderland 🎉',
          //   headerStyle: {
          //     backgroundColor: '#4B81BC',
          //     elevation: 10,
          //   },
          // }}
        />
        <stack.Screen
          name={'Description'}
          component={Description}
          // options={{
          //   title: '🎉 Welcome To The Wonderland 🎉',
          //   headerStyle: {
          //     backgroundColor: '#4B81BC',
          //     elevation: 10,
          //   },
          // }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

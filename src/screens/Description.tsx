import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View, Text} from 'react-native';

interface descriptionProps {
  navigation: StackNavigationProp<any, any>;
  route: any;
}
const Description: React.FC<descriptionProps> = ({navigation, route}) => {
  const {id, title, pic} = route.params;
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default Description;

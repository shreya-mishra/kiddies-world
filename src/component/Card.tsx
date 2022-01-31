import {StackNavigationOptions} from '@react-navigation/stack';
import {StackNavigationHelpers} from '@react-navigation/stack/lib/typescript/src/types';
import React from 'react';
import {Alert, Image, TouchableOpacity, View} from 'react-native';
import {DummyData} from '../constant/DummyData';
import {card_view} from '../styles/GlobalStyle';
import {StackNavigationProp} from '@react-navigation/stack';

interface cardProps {
  pic: string;
  id: number;
  title: string;
  navigation: StackNavigationProp<any, any>;
}
const Card: React.FC<cardProps> = ({pic, id, navigation, title}) => {
  return (
    <TouchableOpacity
      key={id}
      onPress={() => {
        navigation.navigate('Description', {
          id,
          pic,
          title,
        });
      }}>
      <View style={card_view.card_template}>
        <Image
          style={card_view.card_image}
          source={{
            uri: pic,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Card;

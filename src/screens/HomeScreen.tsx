import {StackNavigationHelpers} from '@react-navigation/stack/lib/typescript/src/types';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import Card from '../component/Card';
import Header from '../component/Header';
import {DummyData} from '../constant/DummyData';
import {card_view} from '../styles/GlobalStyle';
import {StackNavigationProp} from '@react-navigation/stack';

const TITLE = '🎉 Welcome To The Wonderland 🎉';
interface navigationProps {
  navigation: StackNavigationProp<any, any>;
}
const HomeScreen: React.FC<navigationProps> = ({navigation}) => {
  return (
    <ScrollView>
      <Header titleProp={TITLE} />
      {/* <Card /> */}
      {DummyData.map(value => (
        <Card
          key={value.id}
          navigation={navigation}
          id={value.id}
          pic={value.image}
          title={value.title}
        />
      ))}
    </ScrollView>
  );
};

export default HomeScreen;

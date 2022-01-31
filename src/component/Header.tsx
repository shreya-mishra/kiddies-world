import React from 'react';
import {View, Text} from 'react-native';

interface headerProps {
  titleProp: string;
}
const Header: React.FC<headerProps> = ({titleProp}) => {
  return (
    <View>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>{titleProp}</Text>
    </View>
  );
};

export default Header;

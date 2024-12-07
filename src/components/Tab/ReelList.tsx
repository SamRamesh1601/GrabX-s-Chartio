import {View, Text} from 'react-native';
import React from 'react';

export interface ReelListProps {
  item: any;
  index: number;
}

const ReelList = ({item, index}: ReelListProps) => {
  return (
    <View>
      <Text>ReelList</Text>
    </View>
  );
};

export default ReelList;

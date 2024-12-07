import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import type {RenderItemProps} from '../../Modules/chat/types';

export const RenderChatHistory = React.useCallback(
  ({item}: RenderItemProps) => <ChatHistory User={'user_1'} data={item} />,
  [],
);

export default function ChatHistory({data, User}: {data: any; User: string}) {
  const isSentMessage = User === data.senderId;

  return (
    <View style={[styles.messageContainer, isSentMessage && styles.sent]}>
      <Text style={styles.messageText}>{data.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  messageContainer: {
    maxWidth: '50%',
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 10,
    marginVertical: 5,
  },
  messageText: {
    color: 'white',
  },
  sent: {
    alignSelf: 'flex-end',
    backgroundColor: '#007aff',
  },
});

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AppIcon from '../../Components/AppIcon';

const SearchScreen = () => {
  function goBack(event: any): void {
    throw new Error('Function not implemented.');
  }

  return (
    <View
      style={{
        ...styles.mainScreenStyle,
        backgroundColor: '#000',
        paddingHorizontal: 2,
        paddingVertical: 8,
      }}>
      <View
        style={{
          width: '100%',
          backgroundColor: '#111',
          flexDirection: 'row',
          paddingHorizontal: 15,
          borderRadius: 30,
          ...styles.containerStyleSpaceBetween,
        }}>
        <TouchableOpacity onPress={goBack}>
          <View
            style={{
              padding: 4,
            }}>
            <AppIcon
              group={'Ant'}
              style={{color: '#FF0066', fontWeight: 'bold', fontSize: 18}}
              name="arrowleft"
            />
          </View>
        </TouchableOpacity>
        <TextInput
          placeholder="Search Stars"
          placeholderTextColor={'#FF0066'}
          multiline={true}
          style={{
            fontFamily: 'Lexend-Regular',
            fontSize: 14,
            paddingHorizontal: 12,
            width: '70%',
            color: '#FFF',
          }}
        />

        <View
          style={{
            padding: 5,
            columnGap: 20,
            flexDirection: 'row',
          }}>
          <TouchableWithoutFeedback>
            <MaterialCommunityIcons
              style={{color: '#FF0066', fontWeight: 'bold', fontSize: 25}}
              name="microphone-outline"
            />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <MaterialCommunityIcons
              style={{color: '#FF0066', fontWeight: 'bold', fontSize: 22}}
              name="qrcode-scan"
            />
          </TouchableWithoutFeedback>
        </View>
      </View>
      <View
        style={{
          marginTop: 30,
        }}></View>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  mainScreenStyle: {
    width: '100%',
    height: '100%',
  },
  headerProfileContent: {
    width: '100%',
  },
  containerStyleCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerStyleSpaceBetween: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconStyle: {
    fontSize: 18,
    color: '#FFF',
  },
  textStyle: {
    fontFamily: 'Lexend-Regular',
    fontSize: 28,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  posterImage: {
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 24,
    margin: 0,
  },
  CommentBox: {
    padding: 10,
    borderRadius: 6,
  },
});

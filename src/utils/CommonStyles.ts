import {StyleSheet} from 'react-native';
import {Theme} from './Theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.darken,
  },
  headerProfileContent: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 25,
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
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  CommentBox: {
    padding: 10,
    borderRadius: 6,
  },
});

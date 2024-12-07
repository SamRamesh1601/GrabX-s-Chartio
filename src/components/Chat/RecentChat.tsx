import {Text, TouchableOpacity, View} from 'react-native';
import AppImage from '../AppImage';
import AppIcon from '../AppIcon';
import {RecentChatProps} from '../../Modules/chat/types';
import AppButton from '../AppButton';
import {style} from './Style';
import AppText from '../AppText';

export default function RecentChat({data = {}, callback}: RecentChatProps) {
  const item = data;
  if (!item) return null;
  return (
    <AppButton style={style.RecentChatContainer} onPress={() => callback(item)}>
      <View style={style.RecentChatLogoContainer}>
        <AppImage
          path={item.image}
          resizeMode="cover"
          imageType={'online'}
          wrapperstyle={style.Logo}
        />
        <View style={[style.RecentLogoOverlay]}>
          <AppText
            numberOfLines={1}
            style={style.RecentLogoOverlayTxt}
            text={item.lastCheckOut ? item.lastCheckOut : 'Now'}
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 10,
          paddingVertical: 5,
          rowGap: 10,
          borderRadius: 10,
          marginVertical: 5,
          overflow: 'hidden',
        }}>
        <AppText
          numberOfLines={1}
          style={{
            width: '100%',
            color: '#F9CEEE',
            fontFamily: 'Lexend-SemiBold',
            fontSize: 15,
            fontWeight: 400,
          }}
          text={item.name}
        />
        <AppText
          numberOfLines={2}
          style={{
            width: '100%',
            color: '#FFF',
            fontFamily: 'Lexend-Regular',
            fontSize: 12,
            fontWeight: 400,
          }}
          text={
            item.lastmsg
              ? item.lastmsg
              : `Hello this from the greeting to you ,   ${item.name}`
          }
        />
      </View>
    </AppButton>
  );
}

/**
 *
 * Pin & Chat Container
 */

{
  /* <View
        style={{
          paddingVertical: 10,
          padding: 12,
          columnGap: 10,
          backgroundColor: '#F9CEEE',
          flexDirection: 'row',
          borderRadius: 150,
        }}>
        <AppButton>
          <AppIcon
            group={'Octi'}
            style={{
              fontSize: 16,
              color: 'rgba(5, 5, 5, .7)',
            }}
            name="pin"
          />
        </AppButton>

        <AppButton>
          <AppIcon
            group={'MatCom'}
            style={{
              fontSize: 18,
              color: 'rgba(5, 5, 5, .7)',
            }}
            name="delete-outline"
          />
        </AppButton>
      </View> */
}

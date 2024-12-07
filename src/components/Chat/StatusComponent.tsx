import {Text, View} from 'react-native';
import {AppStatusComponentProps} from '../../Modules/chat/types';
import AppImage from '../AppImage';
import AppIcon from '../AppIcon';
import {style} from './Style';
import AppText from '../AppText';

export default function StatusComponent({
  item,
  firstName,
  index,
}: AppStatusComponentProps) {
  const active = true;
  return (
    <View key={index} style={style.Container}>
      <View style={style.HeaderContainer}>
        <AppImage
          resizeMode="cover"
          path={item?.image}
          imageType={'online'}
          wrapperstyle={style.Logo}
        />
        <AppText
          text={firstName ? firstName : item?.name}
          style={style.LogoTxt}
        />
      </View>

      <View style={[style.OverlayIcon, active && style.ActiveIcon]}>
        <AppIcon group={'Feat'} style={style.MusicIcon} name="music" />
      </View>
    </View>
  );
}

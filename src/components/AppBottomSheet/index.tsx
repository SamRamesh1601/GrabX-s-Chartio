// CustomBottomSheet.tsx
import React, {useCallback, useMemo, useRef} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {AppBottomSheetProps} from '../types';
import useAppBottomSheet from './hook';

export default function AppBottomSheet({
  snapPoints = ['1%', '25%', '50%'],
  children,
  initialIndex = -1,
}: AppBottomSheetProps) {
  const {bottomSheetRef, HandleClose, HandleOpen} = useAppBottomSheet();

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={initialIndex}
      keyboardBehavior={'interactive'}
      style={{
        flex: 1,
      }}
      backgroundStyle={{
        backgroundColor: 'red',
      }}
      enablePanDownToClose
      snapPoints={snapPoints}>
      <View style={{padding: 20}}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Title</Text>
        <TouchableOpacity onPress={() => bottomSheetRef?.current?.close()}>
          <Text style={{color: 'white'}}>Close</Text>
        </TouchableOpacity>
        {children || <Text>Your custom content goes here!</Text>}
      </View>
      {children}
    </BottomSheet>
  );
}

///  Custom Bottom Sheet

// <BottomSheetModalProvider>
//   <View style={styles.container}>
//     <View style={styles.buttonContainer}>
//       <AppButton onPress={handlePresentModalPress} title="Present Modal" />
//     </View>
//     <BottomSheetModal
//       ref={bottomSheetModalRef}
//       index={initialIndex}
//       snapPoints={snapPoints}
//       onChange={handleSheetChanges}>
//       <BottomSheetView style={styles.contentContainer}>
//         {children}
//       </BottomSheetView>
//     </BottomSheetModal>
//   </View>
// </BottomSheetModalProvider>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  buttonContainer: {
    marginBottom: 16,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
});

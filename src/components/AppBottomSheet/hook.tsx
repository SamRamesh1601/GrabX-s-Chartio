import {BottomSheetModal} from '@gorhom/bottom-sheet';
import React from 'react';

export default function useAppBottomSheet() {
  const bottomSheetRef = React.useRef<BottomSheetModal>(null);

  const HandleOpen = () => {
    bottomSheetRef.current?.expand();
  };

  const HandleClose = () => {
    bottomSheetRef.current?.close();
  };

  return {bottomSheetRef, HandleOpen, HandleClose};
}

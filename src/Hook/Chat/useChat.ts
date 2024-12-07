import {ChatStateProps} from '../../Modules/chat/types';
import {ChatHistoryList, useData} from '../../Util/constants';
import React from 'react';

export default function useChat() {
  const {UserData} = useData();

  const [state, setState] = React.useState<ChatStateProps>({
    openPopup: false,
    selectedPerson: {},
    phtographerList: {},
    chatHistoryList: {},
    chatPreviousHistoryList: [],
    refreshing: false,
  });
  const HandleNavigation = (item: any) => {
    setState((prev: ChatStateProps) => ({
      ...prev,
      selectedPerson: item,
      openPopup: true,
    }));
  };

  const HandleClosePopup = () => {
    setState((prev: ChatStateProps) => ({
      ...prev,
      selectedPerson: null,
      openPopup: false,
    }));
  };

  const HandleRefresh = async () => {
    setState((prev: ChatStateProps) => ({
      ...prev,
      refreshing: true,
    }));
    await new Promise(resolve => setTimeout(resolve, 2000));
    setState((prev: ChatStateProps) => ({
      ...prev,
      refreshing: false,
    }));
  };

  React.useEffect(() => {
    setState((prev: ChatStateProps) => ({
      ...prev,
      phtographerList: UserData,
      chatHistoryList: UserData,
      chatPreviousHistoryList: ChatHistoryList,
    }));
  }, []);

  return {
    ...state,
    setState,
    HandleNavigation,
    HandleClosePopup,
    HandleRefresh,
  };
}

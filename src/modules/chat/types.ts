export interface RecentChatProps {
  data: any;
  callback: (item: any) => void;
}

export interface AppStatusComponentProps {
  item: any;
  firstName: string;
  index: number;
}

export interface RenderItemProps {
  item: any;
  index: number;
}

export interface ChatStateProps {
  openPopup: boolean;
  selectedPerson: any | null;
  phtographerList: any;
  chatHistoryList: any;
  chatPreviousHistoryList: any;
  refreshing: boolean;
}

export interface HeaderContainerProps {
  renderList: any[];
  onClick?: () => void;
}

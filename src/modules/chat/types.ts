import {ChatRouteParamList} from '../../routes/types';

export interface TinyChatProps {
  data: any;
  key: number;
  handleNaigation: (item: any) => void;
}

export interface TinyPhotoGrapherProps {
  item: any;
  firstName: string;
  index: number;
}

export interface RenderItemProps {
  item: any;
  index: number;
}

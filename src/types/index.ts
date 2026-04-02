import {ImageSourcePropType} from 'react-native';

export type OnBoardingData = {
  id: number;
  title: string;
  description: string;
  icon: ImageSourcePropType;
};

export type TextStyles = {
  fontSize?: number;
  fontFamily?: string;
  color?: string;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
};

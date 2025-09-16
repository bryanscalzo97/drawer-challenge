import { NavigatorScreenParams } from '@react-navigation/native';

export type RootDrawerParamList = {
  MainTabs: NavigatorScreenParams<RootTabParamList>;
  Orders: undefined;
};

export type RootTabParamList = {
  HomeStack: NavigatorScreenParams<RootHomeStackParamList>;
  Cart: undefined;
  Favourites: undefined;
};

export type RootHomeStackParamList = {
  Screen1: undefined;
  Screen2: undefined;
};

// Root parameter list for the entire app
export type RootStackParamList = RootDrawerParamList;

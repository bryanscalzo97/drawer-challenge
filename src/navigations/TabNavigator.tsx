import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';

import CartScreen from '../screens/CartScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import HomeStack from './HomeStack';
import { RootTabParamList } from './types';
import {
  tabNavigatorStyles,
  tabBarStyle,
  tabBarColors,
} from './styles/TabNavigatorStyles';

const Tab = createBottomTabNavigator<RootTabParamList>();

type TabIconProps = {
  color: string;
  size: number;
};

const TabIcon = ({ color, size }: TabIconProps) => (
  <View
    style={[
      tabNavigatorStyles.tabIcon,
      { backgroundColor: color, width: size, height: size },
    ]}
  />
);

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle,
        tabBarActiveTintColor: tabBarColors.active,
        tabBarInactiveTintColor: tabBarColors.inactive,
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: TabIcon,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: TabIcon,
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          tabBarLabel: 'Favourites',
          tabBarIcon: TabIcon,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

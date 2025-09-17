import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import TabNavigator from './TabNavigator';
import OrdersScreen from '../screens/OrdersScreen';
import CustomDrawerContent from './CustomDrawerContent';
import { RootStackParamList } from './types';

const Drawer = createDrawerNavigator<RootStackParamList>();

const AppNavigations = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Drawer.Navigator drawerContent={CustomDrawerContent}>
          <Drawer.Screen
            name="MainTabs"
            component={TabNavigator}
            options={{
              drawerLabel: 'Home',
            }}
          />
          <Drawer.Screen
            name="Orders"
            component={OrdersScreen}
            options={{
              drawerLabel: 'Orders',
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavigations;

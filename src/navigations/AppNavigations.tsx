import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AnimatedTabNavigator from '../components/AnimatedTabNavigator';
import OrdersScreen from '../screens/OrdersScreen';
import CustomDrawerContent from './CustomDrawerContent';
import { RootStackParamList } from './types';

const Drawer = createDrawerNavigator<RootStackParamList>();

const AppNavigations = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={CustomDrawerContent}
          screenOptions={{
            drawerInactiveBackgroundColor: 'transparent',
            headerShown: false,
            drawerType: 'back',
            overlayColor: 'transparent',
            drawerStyle: {
              backgroundColor: '#191b1d',
              width: '60%',
            },
            drawerHideStatusBarOnOpen: false,
            sceneStyle: {
              backgroundColor: '#191b1d',
            },
          }}
        >
          <Drawer.Screen
            name="MainTabs"
            component={AnimatedTabNavigator}
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

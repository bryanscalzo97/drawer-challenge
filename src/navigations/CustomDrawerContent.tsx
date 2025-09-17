import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';

import { customDrawerStyles } from './styles/CustomDrawerStyles';

const CustomDrawerContent = ({ navigation }: DrawerContentComponentProps) => {
  return (
    <View style={customDrawerStyles.drawerContainer}>
      <View style={customDrawerStyles.drawerHeader}>
        <Text style={customDrawerStyles.drawerTitle}>Beka</Text>
      </View>

      <TouchableOpacity
        style={customDrawerStyles.drawerItem}
        onPress={() => navigation.navigate('MainTabs')}
      >
        <Text style={customDrawerStyles.drawerItemText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={customDrawerStyles.drawerItem}
        onPress={() => navigation.navigate('Orders')}
      >
        <Text style={customDrawerStyles.drawerItemText}>Orders</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomDrawerContent;

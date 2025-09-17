import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Header from '../components/Header';
import DrawerSceneWrapper from '../components/DrawerSceneWrapper';

const OrdersScreen = () => {
  return (
    <DrawerSceneWrapper>
      <View style={styles.container}>
        <Header title="Orders" />

        <View style={styles.content}>
          <Text style={styles.title}>📦 Your Orders</Text>
          <Text style={styles.subtitle}>No orders yet</Text>
        </View>
      </View>
    </DrawerSceneWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3498db',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#7f8c8d',
    textAlign: 'center',
  },
});

export default OrdersScreen;

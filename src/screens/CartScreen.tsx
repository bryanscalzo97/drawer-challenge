import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import DrawerSceneWrapper from '../components/DrawerSceneWrapper';

const CartScreen = () => {
  return (
    <DrawerSceneWrapper>
      <View style={styles.container}>
        <Header title="Shopping Cart" />

        <View style={styles.content}>
          <Text style={styles.title}>🛒 Your Cart</Text>
          <Text style={styles.subtitle}>Your shopping cart is empty</Text>
        </View>
      </View>
    </DrawerSceneWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff5f5',
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
    color: '#e74c3c',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#7f8c8d',
    textAlign: 'center',
  },
});

export default CartScreen;

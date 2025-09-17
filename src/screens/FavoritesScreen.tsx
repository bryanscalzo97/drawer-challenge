import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import DrawerSceneWrapper from '../components/DrawerSceneWrapper';

const FavoritesScreen = () => {
  return (
    <DrawerSceneWrapper>
      <View style={styles.container}>
        <Header title="Favorites" />

        <View style={styles.content}>
          <Text style={styles.title}>❤️ Your Favorites</Text>
          <Text style={styles.subtitle}>No favorites yet</Text>
        </View>
      </View>
    </DrawerSceneWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fef7f7',
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
    color: '#e91e63',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#7f8c8d',
    textAlign: 'center',
  },
});

export default FavoritesScreen;

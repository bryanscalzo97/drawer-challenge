import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import DrawerSceneWrapper from '../components/DrawerSceneWrapper';

const Screen1 = () => {
  const navigation = useNavigation<any>(); // TODO: add type

  return (
    <DrawerSceneWrapper>
      <View style={styles.container}>
        <Header title="Screen 1" />

        <View style={styles.content}>
          <Text style={styles.title}>Welcome to Screen 1</Text>
          <Text style={styles.subtitle}>
            Tap the menu button in the header to see 3D animation!
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Screen2')}
          >
            <Text style={styles.buttonText}>Go to Screen 2</Text>
          </TouchableOpacity>
        </View>
      </View>
    </DrawerSceneWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
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
    color: '#2c3e50',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#7f8c8d',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#3498db',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    marginVertical: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Screen1;

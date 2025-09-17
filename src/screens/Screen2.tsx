import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import DrawerSceneWrapper from '../components/DrawerSceneWrapper';

const Screen2 = () => {
  const navigation = useNavigation<any>(); // TODO: add type
  return (
    <DrawerSceneWrapper>
      <View style={styles.container}>
        <Header title="Screen 2" showBackButton={true} />

        <View style={styles.content}>
          <Text style={styles.title}>Welcome to Screen 2</Text>
          <Text style={styles.subtitle}>
            This screen also has the animated header!
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Screen1')}
          >
            <Text style={styles.buttonText}>Go to Screen 1</Text>
          </TouchableOpacity>
        </View>
      </View>
    </DrawerSceneWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8f5e8',
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
    backgroundColor: '#27ae60',
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

export default Screen2;

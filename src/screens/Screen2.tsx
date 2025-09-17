import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Screen2 = () => {
  const navigation = useNavigation<any>(); // TODO: add type
  return (
    <View style={styles.container}>
      <Text>Screen 2</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Screen1')}>
        <Text>Go to Screen 1</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Screen2;

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Screen1 = () => {
  const navigation = useNavigation<any>(); // TODO: add type

  return (
    <View style={styles.container}>
      <Text>Screen 1</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Screen2')}>
        <Text>Go to Screen 2</Text>
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

export default Screen1;

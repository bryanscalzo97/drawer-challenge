import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type HeaderWithMenuProps = {
  navigation: {
    openDrawer: () => void;
  };
  title: string;
};

const HeaderWithMenu = ({ navigation, title }: HeaderWithMenuProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.openDrawer()}
    >
      <Text style={styles.menuIcon}>☰</Text>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#007AFF',
  },
  menuIcon: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 15,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HeaderWithMenu;

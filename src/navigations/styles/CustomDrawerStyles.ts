import { StyleSheet } from 'react-native';

export const customDrawerStyles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: '#191b1d',
    gap: 10,
  },
  drawerHeader: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  drawerItem: {
    padding: 15,
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: '#442847',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawerItemText: {
    fontSize: 16,
    color: '#e47a6a',
    fontWeight: '500',
  },
});

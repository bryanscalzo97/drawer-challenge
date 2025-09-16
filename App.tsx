import React from 'react';
import {
  StatusBar,
  useColorScheme,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Import screens
import Screen1 from './src/screens/Screen1';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen2 from './src/screens/Screen2';
import CartScreen from './src/screens/CartScreen';
import FavouritesScreen from './src/screens/FavouritesScreen';
import OrdersScreen from './src/screens/OrdersScreen';

// Create navigators
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

// Home Stack Navigator
function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#007AFF',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="Screen1"
        component={Screen1}
        options={{ title: 'Home - Screen 1' }}
      />
      <Stack.Screen
        name="Screen2"
        component={Screen2}
        options={{ title: 'Home - Screen 2' }}
      />
    </Stack.Navigator>
  );
}

// Custom Drawer Content
function CustomDrawerContent(props: any) {
  return (
    <View style={styles.drawerContainer}>
      <View style={styles.drawerHeader}>
        <Text style={styles.drawerTitle}>Menu</Text>
      </View>

      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => props.navigation.navigate('HomeStack')}
      >
        <Text style={styles.drawerItemText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => props.navigation.navigate('Cart')}
      >
        <Text style={styles.drawerItemText}>Cart</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => props.navigation.navigate('Favourites')}
      >
        <Text style={styles.drawerItemText}>Favourites</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => props.navigation.navigate('Orders')}
      >
        <Text style={styles.drawerItemText}>Orders</Text>
      </TouchableOpacity>
    </View>
  );
}

// Main App
function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? '#000' : '#fff'}
      />
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={props => <CustomDrawerContent {...props} />}
          screenOptions={{
            headerShown: false,
            drawerStyle: {
              width: 280,
            },
          }}
        >
          <Drawer.Screen
            name="HomeStack"
            component={HomeStack}
            options={{
              drawerLabel: 'Home',
            }}
          />
          <Drawer.Screen
            name="Cart"
            component={CartScreen}
            options={{
              drawerLabel: 'Cart',
            }}
          />
          <Drawer.Screen
            name="Favourites"
            component={FavouritesScreen}
            options={{
              drawerLabel: 'Favourites',
            }}
          />
          <Drawer.Screen
            name="Orders"
            component={OrdersScreen}
            options={{
              drawerLabel: 'Orders',
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  drawerHeader: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  drawerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  drawerItem: {
    padding: 15,
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  drawerItemText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
});

export default App;

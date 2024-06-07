import * as React from 'react';
import { useState, useEffect } from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { DefaultTheme, DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { EventRegister } from 'react-native-event-listeners';
import theme from './theme/theme';
import themeContext from './theme/themeContext';

import ListScreen from './pages/ListScreen';
import MapScreen from './pages/MapScreen';
import SettingsScreen from './pages/SettingsScreen';

import alertsData from './data/alerts.json';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// The bottom tab navigator
function MapStack({ alerts }) {
  return (
    <Stack.Navigator initialRouteName="Map" screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Map"
        component={MapScreen}
        initialParams={{ alerts }}
      />
    </Stack.Navigator>
  );
}

// The bottom tab navigator
function ListStack({ alerts }) {
  return (
    <Stack.Navigator initialRouteName="List" screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="List"
        component={ListScreen}
        initialParams={{ alerts }}
      />
    </Stack.Navigator>
  );
}

// The bottom tab navigator
function SettingsStack() {
  return (
    <Stack.Navigator initialRouteName="Settings" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

// The main app component
function App() {
  const [loading, setLoading] = useState(true);
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    setAlerts(alertsData.alerts);
    setLoading(false);
  }, []);

  // Dark Mode
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const listener = EventRegister.addEventListener('ChangeTheme', (data) => {
      setDarkMode(data)

    })
    return () => {
      EventRegister.removeAllListeners(listener)
    }
  }, [darkMode])

  const MapStackComponent = () => <MapStack alerts={alerts} />;
  const ListStackComponent = () => <ListStack alerts={alerts} />;

  return (
    <themeContext.Provider value={darkMode === true ? theme.dark : theme.light}>
      <NavigationContainer theme={darkMode === true ? DarkTheme : DefaultTheme}>
        <Tab.Navigator
          initialRouteName="Feed"
          screenOptions={({ route }) => ({
            headerStyle: { backgroundColor: '#0000e6' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'MapStack') {
                iconName = focused ? 'map-marker' : 'map-marker-outline';
              } else if (route.name === 'ListStack') {
                iconName = focused ? 'format-list-bulleted' : 'format-list-bulleted';
              } else if (route.name === 'SettingsStack') {
                iconName = focused ? 'cog' : 'cog-outline';
              }
              return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen
            name="MapStack"
            component={MapStackComponent}
            options={{
              tabBarLabel: 'Map',
              title: 'Map',
            }}
          />
          <Tab.Screen
            name="ListStack"
            component={ListStackComponent}
            options={{
              tabBarLabel: 'List',
              title: 'Meldingen',
            }}
          />
          <Tab.Screen
            name="SettingsStack"
            component={SettingsStack}
            options={{
              tabBarLabel: 'Settings',
              title: 'Settings',
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </themeContext.Provider>
  );
}

export default App;

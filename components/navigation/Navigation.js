import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TopNav from './TopNav';

import MapScreen from '../../pages/MapScreen';
import ListScreen from '../../pages/ListScreen';
import HelpScreen from '../../pages/HelpScreen';
import EmergencyCall from '../../pages/EmergencyCall';
import SettingsScreen from '../../pages/SettingsScreen';
import AppAppearance from '../../pages/AppAppearance';
import LanguageSettings from '../../pages/LanguageSettings';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = ({ alerts }) => {
  return (
    <Tab.Navigator
      initialRouteName="Map"
      screenOptions={({ route }) => ({
        headerShown: false, // Hides the header for all tab screens
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Map') {
            iconName = 'map';
          } else if (route.name === 'List') {
            iconName = 'view-list';
          } else if (route.name === 'Help') {
            iconName = 'help-circle';
          }
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Map">
        {props => <MapScreen {...props} alerts={alerts} />}
      </Tab.Screen>
      <Tab.Screen name="List">
        {props => <ListScreen {...props} alerts={alerts} />}
      </Tab.Screen>
      <Tab.Screen name="Help" component={HelpScreen} options={{ tabBarLabel: 'Help' }} />
    </Tab.Navigator>
  );
};

const MainNavigator = ({ alerts }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ headerShown: false }}>
          {props => (
            <>
              <TopNav navigation={props.navigation} />
              <TabNavigator {...props} alerts={alerts} />
            </>
          )}
        </Stack.Screen>
        <Stack.Screen name="EmergencyCall" component={EmergencyCall} options={{ title: 'Emergency Call' }} />
        <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }} />
        <Stack.Screen name="AppAppearance" component={AppAppearance} options={{ title: 'App Appearance' }} />
        <Stack.Screen name="LanguageSettings" component={LanguageSettings} options={{ title: 'Language Settings' }} />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

const AppNavigationContainer = ({ alerts }) => {
  return <MainNavigator alerts={alerts} />;
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default AppNavigationContainer;

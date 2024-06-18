import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

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
      <Tab.Screen name="Map" options={{ tabBarLabel: t('navigation.map') }}>
        {props => <MapScreen {...props} alerts={alerts} />}
      </Tab.Screen>
      <Tab.Screen name="List" options={{ tabBarLabel: t('navigation.list') }}>
        {props => <ListScreen {...props} alerts={alerts} />}
      </Tab.Screen>
      <Tab.Screen name="Help" component={HelpScreen} options={{ tabBarLabel: t('navigation.help') }} />
    </Tab.Navigator>
  );
};

const MainNavigator = ({ alerts }) => {
  const { t } = useTranslation();

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
        <Stack.Screen name="EmergencyCall" component={EmergencyCall} options={{ title: t('navigation.emergency_call') }} />
        <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: t('navigation.settings') }} />
        <Stack.Screen name="AppAppearance" component={AppAppearance} options={{ title: t('navigation.app_appearance') }} />
        <Stack.Screen name="LanguageSettings" component={LanguageSettings} options={{ title: t('navigation.language_settings') }} />
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

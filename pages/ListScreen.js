import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import themeContext from '../theme/themeContext';

const ListScreen = ({ route, navigation }) => {
  const [alerts, setAlerts] = useState([]);
  const [savedAlerts, setSavedAlerts] = useState([]);
  const theme = useContext(themeContext);

  useEffect(() => {
    if (route.params?.alerts) {
      setAlerts(route.params.alerts);
    }
    getSavedAlerts();
  }, []);

  const getSavedAlerts = async () => {
    try {
      const savedAlertsJson = await AsyncStorage.getItem('savedAlerts');
      if (savedAlertsJson !== null) {
        setSavedAlerts(JSON.parse(savedAlertsJson));
      }
    } catch (error) {
      console.error('Error retrieving saved alerts:', error);
    }
  };

  const handleSaveAlert = async (alertTitle) => {
    try {
      const index = savedAlerts.indexOf(alertTitle);
      if (index === -1) {
        const updatedSavedAlerts = [...savedAlerts, alertTitle];
        setSavedAlerts(updatedSavedAlerts);
        await AsyncStorage.setItem('savedAlerts', JSON.stringify(updatedSavedAlerts));
        alert('Alert saved successfully!');
      } else {
        const updatedSavedAlerts = savedAlerts.filter((savedAlert) => savedAlert !== alertTitle);
        setSavedAlerts(updatedSavedAlerts);
        await AsyncStorage.setItem('savedAlerts', JSON.stringify(updatedSavedAlerts));
        alert('Alert removed from favorites!');
      }
    } catch (error) {
      console.error('Error saving alert:', error);
    }
  };

  const isAlertSaved = (alertTitle) => {
    return savedAlerts.includes(alertTitle);
  };

  const handleAlertItemClick = (alert) => {
    navigation.navigate('Map', { selectedAlert: alert });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <ScrollView style={styles.scrollView}>
          {alerts.map((alert, index) => (
            <View key={index} style={styles.listView}>
              <TouchableOpacity
                style={{ flexDirection: 'row', justifyContent: 'space-between' }}
                onPress={() => handleAlertItemClick(alert)}
              >
                <Text style={[styles.textItem, { color: theme.color }]}>{alert.title}</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={() => handleSaveAlert(alert.title)}
                style={[styles.itemHeartButton, { color: theme.color }]}
              >
                <Icon
                  name={isAlertSaved(alert.title) ? 'heart' : 'heart-outline'}
                  size={30}
                  color={isAlertSaved(alert.title) ? 'red' : theme.color}
                />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <TouchableOpacity style={[styles.heartButton, { backgroundColor: theme.color }]} onPress={() => navigation.navigate('Saved')}>
          <Icon name="heart" size={30} color="red" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 60,
    width: '100%',
  },

  listView: {
    flexDirection: 'column',
    marginBottom: 10,
  },

  textItem: {
    fontSize: 20,
  },

  itemHeartButton: {
    alignItems: 'center',
  },

  heartButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    padding: 8,
    borderRadius: 20,
    elevation: 5,
  },
});

export default ListScreen;

import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AsyncStorage} from 'react-native';
import themeContext from '../theme/themeContext';

const ListScreen = ({ route, navigation }) => {
  const [alerts, setAlerts] = useState([]);
  const [savedAlerts, setSavedAlerts] = useState([]);

  const theme = useContext(themeContext);

  // Retrieve the alerts from the route parameters and set them in the state
  useEffect(() => {
    setAlerts(route.params.alerts);
    getSavedAlerts();
  }, []);

  // retrieve the saved alerts from storage
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
        // Alert is not saved, add it to the saved alerts list
        const updatedSavedAlerts = [...savedAlerts, lertTitle];
        setSavedAlerts(updatedSavedAlerts);

        await AsyncStorage.setItem('savedAlerts', JSON.stringify(updatedSavedAlerts));
        alert('Alert saved successfully!');
      } else {
        // Alert is already saved, remove it from the saved alerts list
        const updatedSavedAlerts = savedAlerts.filter((savedAlert) => savedAlert !== alertTitle);
        setSavedAlerts(updatedSavedAlerts);

        await AsyncStorage.setItem('savedAlerts', JSON.stringify(updatedSavedAlerts));
        alert('Alert removed from favorites!');
      }
    } catch (error) {
      console.error('Error saving alert:', error);
    }
  };

  // check if the alert is saved
  const isAlertSaved = (alertTitle) => {
    return savedAlerts.includes(alertTitle);
  };

  // handle the click on a alert item to navigate to the map
  const handleAlertItemClick = (alert) => {
    navigation.navigate('Map', { selectedAlert: alert });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

          <ScrollView style={styles.scrollView}>
            {alerts.map((alert, index) => (
              <View styles={styles.listView}>

              <TouchableOpacity
                key={index}
                style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}
                onPress={() => handleAlertItemClick(alert)}
              >
                <Text style={[styles.textItem, { color: theme.color }]}>{alert.title}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleSaveAlert(lert.title)}
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

        </View>
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
    flex: 1,
    flexDirection: 'column',
  },

  alertItem: {
    flex: 1,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },

  itemHeartButton: {
    flex: 1,
  },

  textItem: {
    flex: 1,
    fontSize: 20,
  },

  heartButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    zIndex: 1,
    backgroundColor: '#000',
    padding: 8,
    borderRadius: 20,
    elevation: 5,
  },
});

export default ListScreen;

import React, { useState, useEffect, useContext } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import {AsyncStorage} from 'react-native';
import themeContext from '../theme/themeContext';

const SavedScreen = () => {
  const [savedAlerts, setSavedAlerts] = useState([]);

  const theme = useContext(themeContext);
  
  // retrieve the saved Alerts from storage
  useEffect(() => {
    getSavedAlerts();
  }, []);

  // retrieve the saved Alerts from storage
  const getSavedAlerts = async () => {
    try {
      const savedAlertsJson = await AsyncStorage.getItem('savedAlerts');
      if (savedAlertsJson !== null) {
        setSavedAlerts(JSON.parse(savedAlertsJson));
      }
    } catch (error) {
      console.error('Error retrieving saved Alerts:', error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={[styles.header, { color: theme.color }]}>
            Your favorites
          </Text>

          {savedAlerts.length > 0 ? (
            savedAlerts.map((alert, index) => (
              <View key={index} style={{ marginBottom: 10 }} >
                <Text style={[styles.textItem, { color: theme.color }]}>{alert}</Text>
              </View>
            ))
          ) : (
            <Text>No saved alerts found.</Text>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 16,
  },

  textItem: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default SavedScreen;

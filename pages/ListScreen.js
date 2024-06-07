import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import themeContext from '../theme/themeContext';

const ListScreen = ({ route, navigation }) => {
  const [alerts, setAlerts] = useState([]);
  const theme = useContext(themeContext);

  useEffect(() => {
    if (route.params?.alerts) {
      setAlerts(route.params.alerts);
    }
  }, []);

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
            </View>
          ))}
        </ScrollView>
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
});

export default ListScreen;

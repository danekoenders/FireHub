import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import themeContext from '../theme/themeContext';
import TopNav from '../components/navigation/TopNav';

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
      <TopNav />
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    width: '100%',
    padding: 16,
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

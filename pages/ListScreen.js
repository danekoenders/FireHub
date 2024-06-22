import React, { useContext } from 'react';
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView, ScrollView, Image } from 'react-native';
import themeContext from '../theme/themeContext';
import { useTranslation } from 'react-i18next';

const ListScreen = ({ alerts, navigation }) => {
  const theme = useContext(themeContext);
  const { t, i18n } = useTranslation();

  const handleAlertItemClick = (alert) => {
    navigation.navigate('Map', { selectedAlert: alert });
  };

  const translatedAlerts = alerts.map((alert) => ({
    ...alert,
    title: alert.title[i18n.language],
    details: alert.details[i18n.language],
  }));

  const categorizedAlerts = translatedAlerts.reduce((acc, alert) => {
    const { type } = alert;
    if (!acc[type]) {
      acc[type] = [];
    }
    acc[type].push(alert);
    return acc;
  }, {});

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {Object.keys(categorizedAlerts).map((type, index) => (
          <View key={index} style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>{type}</Text>
            {categorizedAlerts[type].map((alert, idx) => (
              <TouchableOpacity
                key={idx}
                style={styles.alertItem}
                onPress={() => handleAlertItemClick(alert)}
              >
                <View style={styles.iconAndText}>
                  <Image source={{ uri: alert.icon }} style={styles.icon} />
                  <Text style={[styles.alertText, { color: theme.color }]}>{alert.title}</Text>
                </View>
                <Text style={styles.detailsText}>{alert.time}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    padding: 16,
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  alertItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  iconAndText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  alertText: {
    fontSize: 16,
  },
  detailsText: {
    fontSize: 14,
    color: '#666',
  },
});

export default ListScreen;

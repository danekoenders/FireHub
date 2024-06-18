import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HelpScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Help</Text>
      <View style={styles.separator} />
      <TouchableOpacity style={styles.helpItem}>
        <Icon name="phone" size={30} color="#000" style={styles.icon} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Uitleg noodoproep</Text>
          <Text style={styles.subtitle}>Wie moet je wanneer bellen?</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.helpItem}>
        <Icon name="information-outline" size={30} color="#000" style={styles.icon} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>App uitleg</Text>
          <Text style={styles.subtitle}>Hoe werkt de app?</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.helpItem}>
        <Icon name="lightbulb-on-outline" size={30} color="#000" style={styles.icon} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Tips en Tricks</Text>
          <Text style={styles.subtitle}>Krijg tips en tricks over noodsituaties</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  separator: {
    height: 1,
    backgroundColor: '#EEE',
    marginBottom: 20,
  },
  helpItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  icon: {
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#777',
  },
});

export default HelpScreen;

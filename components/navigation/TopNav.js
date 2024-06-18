import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TopNav = ({ navigation, tags = [] }) => {
  const [currentTab, setCurrentTab] = useState('Home'); // Keep track of the current tab

  const handleNavigation = (screen, label) => {
    setCurrentTab(label);
    navigation.navigate(screen, { previousScreenLabel: label });
  };

  return (
    <View style={styles.topNav}>
      <View style={styles.menu}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleNavigation('EmergencyCall', currentTab)}
        >
          <Icon name="phone-in-talk" size={24} color="red" />
        </TouchableOpacity>
        <View style={styles.searchContainer}>
          <Icon name="search" size={24} color="#999" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleNavigation('Settings', currentTab)}
        >
          <Icon name="settings" size={24} color="#999" />
        </TouchableOpacity>
      </View>
      <View style={styles.tags}>
        {tags.map((tag, index) => (
          <Text key={index} style={styles.tag}>{tag}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topNav: {
    flexDirection: 'column',
    padding: 10,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EEE'
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    padding: 10,
    borderRadius: 20,
    flex: 1,
    marginHorizontal: 10
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
    color: '#333'
  },
  tags: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap'
  },
  tag: {
    backgroundColor: '#EDEDED',
    padding: 5,
    margin: 2,
    borderRadius: 10
  }
});

export default TopNav;

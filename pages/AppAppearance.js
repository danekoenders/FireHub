import React, { useState, useContext } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Switch } from 'react-native';
import { EventRegister } from 'react-native-event-listeners';
import themeContext from '../theme/themeContext';

const AppAppearance = () => {
  const [darkMode, setDarkMode] = useState(false);
  const theme = useContext(themeContext);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <View style={styles.content}>
        <Text style={[styles.title, { color: theme.color }]}>App Appearance</Text>
        <Text style={[styles.description, { color: theme.color }]}>
          Toggle the switch below to change the theme to Dark Mode.
        </Text>
        <View style={styles.settingRow}>
          <Text style={[styles.settingLabel, { color: theme.color }]}>Dark Theme</Text>
          <Switch
            value={darkMode}
            onValueChange={(value) => {
              setDarkMode(value);
              EventRegister.emit('ChangeTheme', value);
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  settingLabel: {
    fontSize: 18,
  },
});

export default AppAppearance;

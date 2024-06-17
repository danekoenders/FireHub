import * as React from 'react';
import { useState, useContext } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Switch } from 'react-native';
import { EventRegister } from 'react-native-event-listeners';
import themeContext from '../theme/themeContext';

const AppAppearance = () => {

  const [darkMode, setDarkMode] = useState(false);
  const theme = useContext(themeContext);

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AppAppearance;
import * as React from 'react';
import { useState, useContext } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Switch } from 'react-native';
import { EventRegister } from 'react-native-event-listeners';
import themeContext from '../theme/themeContext';

const EmergencyCall = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.settingRow}>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    width: '100%',
    height: '100%',
  },

  settingLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: 16,
  },
});

export default EmergencyCall;
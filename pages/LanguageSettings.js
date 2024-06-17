import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const LanguageSettings = () => {
  return (
    <View style={styles.container}>
      <Text>LanguageSettings Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LanguageSettings;
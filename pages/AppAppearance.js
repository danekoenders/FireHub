import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const AppAppearance = () => {
  return (
    <View style={styles.container}>
      <Text>AppAppearance Screen</Text>
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

export default AppAppearance;
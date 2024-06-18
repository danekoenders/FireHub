import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext'; // Updated import path

const LanguageSettings = () => {
  const { t } = useTranslation();
  const { changeLanguage } = useLanguage();

  return (
    <View style={styles.container}>
      <Text>{t('language')}</Text>
      <Button title={t('english')} onPress={() => changeLanguage('en')} />
      <Button title={t('dutch')} onPress={() => changeLanguage('nl')} />
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

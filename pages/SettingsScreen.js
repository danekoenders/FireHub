import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

const SettingsScreen = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  return (
    <View style={styles.container}>

      <View style={styles.profile}>
        <Icon name="person" size={50} color="#000" style={styles.profileIcon} />
        <View style={styles.profileTextContainer}>
          <Text style={styles.profileName}>Pieter Hoogeveen</Text>
          <Icon name="qr-code" size={30} color="#000" style={styles.qrCode} />
        </View>
      </View>

      <View style={styles.settings}>
        <TouchableOpacity style={styles.settingItem}>
          <Icon name="account-circle" size={24} color="#000" style={styles.settingIcon} />
          <View style={styles.settingTextContainer}>
            <Text style={styles.settingText}>{t('settings.account')}</Text>
            <Text style={styles.settingSubtext}>{t('settings.account_subtext')}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <Icon name="notifications" size={24} color="#000" style={styles.settingIcon} />
          <View style={styles.settingTextContainer}>
            <Text style={styles.settingText}>{t('settings.notifications')}</Text>
            <Text style={styles.settingSubtext}>{t('settings.notifications_subtext')}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem} onPress={() => navigation.navigate('AppAppearance')}>
          <Icon name="edit" size={24} color="#000" style={styles.settingIcon} />
          <View style={styles.settingTextContainer}>
            <Text style={styles.settingText}>{t('settings.appearance')}</Text>
            <Text style={styles.settingSubtext}>{t('settings.appearance_subtext')}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <Icon name="contact-mail" size={24} color="#000" style={styles.settingIcon} />
          <View style={styles.settingTextContainer}>
            <Text style={styles.settingText}>{t('settings.contact')}</Text>
            <Text style={styles.settingSubtext}>{t('settings.contact_subtext')}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem} onPress={() => navigation.navigate('LanguageSettings')}>
          <Icon name="language" size={24} color="#000" style={styles.settingIcon} />
          <View style={styles.settingTextContainer}>
            <Text style={styles.settingText}>{t('settings.language')}</Text>
            <Text style={styles.settingSubtext}>{t('settings.language_subtext')}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  profileIcon: {
    marginRight: 20,
  },
  profileTextContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  qrCode: {
    marginLeft: 10,
  },
  settings: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  settingIcon: {
    width: 30,
    height: 30,
    marginRight: 20,
  },
  settingTextContainer: {
    flex: 1,
  },
  settingText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  settingSubtext: {
    fontSize: 14,
    color: '#777777',
  },
});

export default SettingsScreen;

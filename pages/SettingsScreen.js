import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
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
        <Text style={styles.profileName}>{t('settings.profile_name')}</Text>
        <Icon name="qr-code" size={30} color="#000" style={styles.qrCode} />
      </View>

      <View style={styles.settings}>
        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingIcon}>
            <Icon name="account-circle" size={24} color="#000" />
          </View>
          <Text style={styles.settingText}>{t('settings.account')}</Text>
          <Text style={styles.settingSubtext}>{t('settings.account_subtext')}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingIcon}>
            <Icon name="notifications" size={24} color="#000" />
          </View>
          <Text style={styles.settingText}>{t('settings.notifications')}</Text>
          <Text style={styles.settingSubtext}>{t('settings.notifications_subtext')}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem} onPress={() => navigation.navigate('AppAppearance')}>
          <View style={styles.settingIcon}>
            <Icon name="edit" size={24} color="#000" />
          </View>
          <Text style={styles.settingText}>{t('settings.appearance')}</Text>
          <Text style={styles.settingSubtext}>{t('settings.appearance_subtext')}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingIcon}>
            <Icon name="contact-mail" size={24} color="#000" />
          </View>
          <Text style={styles.settingText}>{t('settings.contact')}</Text>
          <Text style={styles.settingSubtext}>{t('settings.contact_subtext')}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem} onPress={() => navigation.navigate('LanguageSettings')}>
          <View style={styles.settingIcon}>
            <Icon name="language" size={24} color="#000" />
          </View>
          <Text style={styles.settingText}>{t('settings.language')}</Text>
          <Text style={styles.settingSubtext}>{t('settings.language_subtext')}</Text>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  backButton: {
    padding: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  profileIcon: {
    marginRight: 20,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 20,
  },
  qrCode: {
    marginRight: 20,
  },
  settings: {
    paddingHorizontal: 20,
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
  settingText: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
  },
  settingSubtext: {
    fontSize: 14,
    color: '#777777',
  },
});

export default SettingsScreen;

// import * as React from 'react';
// import { useState, useContext } from 'react';
// import { View, Text, SafeAreaView, StyleSheet, Switch } from 'react-native';
// import { EventRegister } from 'react-native-event-listeners';
// import themeContext from '../theme/themeContext';

// // Settings screen
// const SettingsScreen = () => {

//   const [darkMode, setDarkMode] = useState(false);
//   const theme = useContext(themeContext);
  
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <View style={styles.settingRow}>
//         <Text style={[styles.settingLabel, { color: theme.color }]}>Dark Theme</Text>
//         <Switch
//           value={darkMode}
//           onValueChange={(value) => {
//             setDarkMode(value);
//             EventRegister.emit('ChangeTheme', value);
//           }}
//         />
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   settingRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 16,
//     width: '100%',
//     height: '100%',
//   },

//   settingLabel: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginRight: 16,
//   },
// });

// export default SettingsScreen;

import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const SettingsScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>

      <View style={styles.profile}>
        <Icon name="person" size={50} color="#000" style={styles.profileIcon} />
        <Text style={styles.profileName}>Pieter Hoogeveen</Text>
        <Icon name="qr-code" size={30} color="#000" style={styles.qrCode} />
      </View>

      <View style={styles.settings}>
        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingIcon}>
            <Icon name="account-circle" size={24} color="#000" />
          </View>
          <Text style={styles.settingText}>Account</Text>
          <Text style={styles.settingSubtext}>Privacy, Beveiliging, DigiD</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingIcon}>
            <Icon name="notifications" size={24} color="#000" />
          </View>
          <Text style={styles.settingText}>Notificaties</Text>
          <Text style={styles.settingSubtext}>Berichten en notificatie radius aanpassen</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem} onPress={() => navigation.navigate('AppAppearance')}>
          <View style={styles.settingIcon}>
            <Icon name="edit" size={24} color="#000" />
          </View>
          <Text style={styles.settingText}>Uiterlijk</Text>
          <Text style={styles.settingSubtext}>Verander het uiterlijk van je app</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingIcon}>
            <Icon name="contact-mail" size={24} color="#000" />
          </View>
          <Text style={styles.settingText}>Contact</Text>
          <Text style={styles.settingSubtext}>Help center, E-mail</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem} onPress={() => navigation.navigate('LanguageSettings')}>
          <View style={styles.settingIcon}>
            <Icon name="language" size={24} color="#000" />
          </View>
            <Text style={styles.settingText}>Taal</Text>
        <Text style={styles.settingSubtext}>Verander de taal van de app</Text>
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
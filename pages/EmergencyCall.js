import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTranslation } from 'react-i18next';

const EmergencyCall = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <EmergencyItem
          title={t('emergency.police')}
          description={t('emergency.police_description')}
          phoneNumber="0900-8844"
          iconName="security"
          iconColor="#FFA500"
        />
        <EmergencyItem
          title={t('emergency.fire_brigade')}
          description={t('emergency.fire_brigade_description')}
          phoneNumber="0900-0904"
          iconName="fire-extinguisher"
          iconColor="#FF4500"
        />
        <EmergencyItem
          title={t('emergency.ambulance')}
          description={t('emergency.ambulance_description')}
          phoneNumber="088-6223223"
          iconName="local-hospital"
          iconColor="#1E90FF"
        />
        <TouchableOpacity style={styles.emergencyButton}>
          <View style={styles.circle}>
            <Icon name="phone-in-talk" size={30} color="white" />
          </View>
          <View style={styles.emergencyButtonTextContainer}>
            <Text style={styles.emergencyButtonText}>Spoed</Text>
            <Text style={styles.emergencyButtonNumber}>112</Text>
          </View>
          <View style={styles.circleWhite}>
            <Icon name="phone-in-talk" size={30} color="red" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const EmergencyItem = ({ title, description, phoneNumber, iconName, iconColor }) => {
  return (
    <TouchableOpacity style={styles.emergencyItem}>
      <View style={[styles.circle, { backgroundColor: iconColor }]}>
        <Icon name={iconName} size={30} color="white" />
      </View>
      <View style={styles.emergencyItemText}>
        <Text style={styles.emergencyItemTitle}>{title}</Text>
        <Text style={styles.emergencyItemDescription}>{description}</Text>
        <Text style={styles.emergencyItemPhoneNumber}>{phoneNumber}</Text>
      </View>
      <TouchableOpacity style={styles.circleRed}>
        <Icon name="phone" size={30} color="white" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 20,
  },
  emergencyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleRed: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ff0000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleWhite: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ff0000',
  },
  emergencyItemText: {
    flex: 1,
    marginLeft: 20,
  },
  emergencyItemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  emergencyItemDescription: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },
  emergencyItemPhoneNumber: {
    fontSize: 14,
    color: '#000',
    marginTop: 5,
  },
  emergencyButton: {
    backgroundColor: '#ff0000',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  emergencyButtonTextContainer: {
    flex: 1,
    marginLeft: 20,
  },
  emergencyButtonText: {
    fontSize: 18,
    color: '#fff',
  },
  emergencyButtonNumber: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default EmergencyCall;

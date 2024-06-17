import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const EmergencyCall = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <EmergencyItem 
          title="Politie" 
          description="Geen spoed\nBijvoorbeeld: aangifte, diefstal" 
          phoneNumber="0900-8844" 
          iconName="security" 
        />
        <EmergencyItem 
          title="Brandweer" 
          description="Geen spoed\nBijvoorbeeld: kat in de boom, lek" 
          phoneNumber="0900-0904" 
          iconName="fire-extinguisher" 
        />
        <EmergencyItem 
          title="Ambulance" 
          description="Geen spoed\nBijvoorbeeld: niet gevaarlijk letsel" 
          phoneNumber="088-6223223" 
          iconName="local-hospital" 
        />
        <TouchableOpacity style={styles.emergencyButton}>
          <View style={styles.circle}>
            <Icon name="phone-in-talk" size={24} color="white" />
          </View>
          <Text style={styles.emergencyButtonText}>Nood</Text>
          <Text style={styles.emergencyButtonNumber}>112</Text>
          <View style={styles.circle}>
            <Icon name="phone-in-talk" size={24} color="white" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const EmergencyItem = ({ title, description, phoneNumber, iconName }) => {
  return (
    <TouchableOpacity style={styles.emergencyItem}>
      <View style={styles.circle}>
        <Icon name={iconName} size={24} color="white" />
      </View>
      <View style={styles.emergencyItemText}>
        <Text style={styles.emergencyItemTitle}>{title}</Text>
        <Text style={styles.emergencyItemDescription}>{description}</Text>
        <Text style={styles.emergencyItemPhoneNumber}>{phoneNumber}</Text>
      </View>
      <View style={styles.circle}>
        <Icon name="phone-in-talk" size={24} color="white" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
  },
  emergencyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    height: 150,
    width: '100%',
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  emergencyItemText: {
    flex: 1,
    marginLeft: 10,
  },
  emergencyItemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  emergencyItemDescription: {
    fontSize: 14,
    color: '#777',
  },
  emergencyItemPhoneNumber: {
    fontSize: 14,
    color: '#000',
  },
  emergencyButton: {
    backgroundColor: 'red',
    padding: 12,
    height: 150,
    width: '100%',
    borderRadius: 10,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  emergencyButtonText: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
  },
  emergencyButtonNumber: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#fff',
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EmergencyCall;
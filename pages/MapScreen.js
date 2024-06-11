import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Location from 'expo-location';
import themeContext from '../theme/themeContext';
import TopNav from '../components/navigation/TopNav';

const MapScreen = ({ route, navigation }) => {
  const [alerts, setAlerts] = useState([]);
  const [selectedAlert, setSelectedAlert] = useState(null);

  // Retrieve the theme from the context
  const theme = useContext(themeContext);

  // Retrieve the alerts from the route parameters and set them in the state
  useEffect(() => {
    setAlerts(route.params.alerts);
  }, []);

  // handle the click on a alert item to navigate to the map
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location);
    })();
  }, []);

  useEffect(() => {
    // Retrieve the selected alert from the route parameters and set it in the state
    if (route.params && route.params.selectedAlert) {
      setSelectedAlert(route.params.selectedAlert);
    }
  }, [route.params]);

  useEffect(() => {
    // When the selected alert changes, focus the map on the selected alert's marker
    if (selectedAlert) {
      // Assuming your alert object has `latitude` and `longitude` properties.
      const { latitude, longitude } = selectedAlert;
      mapRef.current?.animateToRegion({
        latitude,
        longitude,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      });
    }
  }, [selectedAlert]);

  // Create a reference to the map
  const mapRef = React.useRef(null);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNav />
      <View style={styles.view}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <MapView
            ref={mapRef}
            style={styles.map}
            region={{
              latitude: 51.91972,
              longitude: 4.47778,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
            showsUserLocation={true}
            onUserLocationChange={(e) => {
              e.nativeEvent;
            }}
          >
            {alerts.map((alert, index) => (
              <Marker
                key={index}
                coordinate={{
                  title: alert.title,
                  description: alert.description,
                  latitude: alert.latitude,
                  longitude: alert.longitude,
                }}

                // Make the marker clickable
                onPress={() => setSelectedAlert(alert)}
              />
            ))}
          </MapView>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },

  view: {
    flex: 1,
    padding: 0,
  },

  map: {
    ...StyleSheet.absoluteFillObject,
  },

  heartButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    zIndex: 1,
    backgroundColor: '#000',
    padding: 8,
    borderRadius: 20,
    elevation: 5,
  },
});

export default MapScreen;

import * as React from 'react';
import { useState, useEffect, useContext, useRef } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import * as Location from 'expo-location';
import themeContext from '../theme/themeContext';

const MapScreen = ({ alerts, route, navigation }) => {
  const [selectedAlert, setSelectedAlert] = useState(null);
  const theme = useContext(themeContext);
  const mapRef = useRef(null);

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
    if (route.params && route.params.selectedAlert) {
      setSelectedAlert(route.params.selectedAlert);
    }
  }, [route.params]);

  useEffect(() => {
    if (selectedAlert) {
      const { latitude, longitude } = selectedAlert;
      mapRef.current?.animateToRegion({
        latitude,
        longitude,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      });
    }
  }, [selectedAlert]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.view}>
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
        >
          {alerts.map((alert, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: alert.latitude,
                longitude: alert.longitude,
              }}
              title={alert.title}
              description={alert.description}
              onPress={() => setSelectedAlert(alert)}
            />
          ))}
        </MapView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 0,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapScreen;

import React, { useState, useEffect, useContext, useRef } from 'react';
import MapView, { Polygon } from 'react-native-maps';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import * as Location from 'expo-location';
import themeContext from '../theme/themeContext';
import { useTranslation } from 'react-i18next';

import CustomMarker from '../components/Map/CustomMarker.js';

const MapScreen = ({ alerts, route, navigation }) => {
    const [selectedAlert, setSelectedAlert] = useState(null);
    const theme = useContext(themeContext);
    const mapRef = useRef(null);
    const { t, i18n } = useTranslation();

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

    const suburbCoordinates = [
        { latitude: 51.9230, longitude: 4.4712 },
        { latitude: 51.9243, longitude: 4.4780 },
        { latitude: 51.9180, longitude: 4.4810 },
        { latitude: 51.9164, longitude: 4.4736 }
    ];

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
                        <CustomMarker
                            key={index}
                            alert={{
                                ...alert,
                                title: alert.title[i18n.language],
                                details: alert.details[i18n.language],
                            }}
                        />
                    ))}
                    <Polygon
                        coordinates={suburbCoordinates}
                        strokeColor="#1F8505" // border color
                        fillColor="rgba(31, 133, 5, 0.1)" // semi-transparent fill
                        strokeWidth={1}
                    />
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
    markerStyle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconStyle: {
        width: 25,
        height: 25
    }
});

export default MapScreen;

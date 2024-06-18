import * as React from 'react';
import { useState, useEffect, useContext, useRef } from 'react';
import MapView, { Marker, Polygon } from 'react-native-maps';
import { StyleSheet, View, SafeAreaView, Image } from 'react-native';
import * as Location from 'expo-location';
import themeContext from '../theme/themeContext';

// Icon imports
import medischIcon from '../assets/icons/medisch.png';
import brandIcon from '../assets/icons/brand.png';
import verkeerIcon from '../assets/icons/verkeer.png';
import stroomIcon from '../assets/icons/stroom.png';
import mededelingIcon from '../assets/icons/mededeling.png';
import overlastIcon from '../assets/icons/overlast.png';
import verdachtIcon from '../assets/icons/verdacht.png';
import hulpIcon from '../assets/icons/hulp.png';

// Define colors for each type
const colors = {
    'Verkeers ongeval': '#D9534F', // Red
    'Medisch ongeval': '#5CB85C', // Green
    'Brand': '#D9534F', // Red
    'Stroomuitval': '#F0AD4E', // Orange
    'Mededeling': '#5BC0DE', // Light Blue
    'Overlast': '#5CB85C', // Green
    'Verdachte situatie': '#F0AD4E', // Orange
    'Vragen/Hulp': '#5BC0DE' // Light Blue
};

// Custom Marker Component
const CustomMarker = ({ alert }) => {
    const icon = getIcon(alert.type);
    const backgroundColor = colors[alert.type] || '#FFFFFF';

    return (
        <Marker coordinate={{ latitude: alert.latitude, longitude: alert.longitude }}>
            <View style={[styles.markerStyle, { backgroundColor }]}>
                <Image source={icon} style={styles.iconStyle} resizeMode="contain" />
            </View>
        </Marker>
    );
};

// Get icon based on type
const getIcon = (type) => {
    switch (type) {
        case 'Medisch ongeval':
            return medischIcon;
        case 'Brand':
            return brandIcon;
        case 'Verkeers ongeval':
            return verkeerIcon;
        case 'Stroomuitval':
            return stroomIcon;
        case 'Mededeling':
            return mededelingIcon;
        case 'Overlast':
            return overlastIcon;
        case 'Verdachte situatie':
            return verdachtIcon;
        case 'Vragen/Hulp':
            return hulpIcon;
        default:
            return null; // Handle undefined types
    }
};

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
                        <CustomMarker key={index} alert={alert} />
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

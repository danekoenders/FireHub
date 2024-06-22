import { Marker, Callout } from 'react-native-maps';
import { Text, View, StyleSheet, Image } from 'react-native';

// Icon imports
import medischIcon from '../../assets/icons/medisch.png';
import brandIcon from '../../assets/icons/brand.png';
import verkeerIcon from '../../assets/icons/verkeer.png';
import stroomIcon from '../../assets/icons/stroom.png';
import mededelingIcon from '../../assets/icons/mededeling.png';
import overlastIcon from '../../assets/icons/overlast.png';
import verdachtIcon from '../../assets/icons/verdacht.png';
import hulpIcon from '../../assets/icons/hulp.png';

// Custom Marker Component
const CustomMarker = ({ alert }) => {
    const icon = getIcon(alert.type);
    const backgroundColor = colors[alert.type] || '#FFFFFF';

    return (
        <Marker coordinate={{ latitude: alert.latitude, longitude: alert.longitude }}>
            <View style={[styles.markerStyle, { backgroundColor }]}>
                <Image source={icon} style={styles.iconStyle} resizeMode="contain" />
            </View>
            <Callout tooltip style={styles.calloutStyle}>
                <View style={styles.calloutContainer}>
                    <Text style={styles.calloutTitle}>{alert.title}</Text>
                    <Text style={styles.calloutDetails}>{alert.details}</Text>
                </View>
            </Callout>
        </Marker>
    );
};

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

// Add styles for Callout
const styles = StyleSheet.create({
    calloutStyle: {
        width: 160, // Set the width of the callout
        height: 'auto',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 6,
        borderColor: 'grey',
        borderWidth: 0.5,
    },
    calloutContainer: {
        flex: 1,
        alignItems: 'center',
    },
    calloutTitle: {
        fontWeight: 'bold',
        marginBottom: 5
    },
    calloutDetails: {
        fontSize: 12
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

export default CustomMarker;

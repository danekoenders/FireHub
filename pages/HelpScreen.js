import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView, ScrollView } from 'react-native';
import themeContext from '../theme/themeContext';

const HelpScreen = ({ route, navigation }) => {
    const theme = useContext(themeContext);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={styles.scrollView}>
                <View style={{ flex: 1, padding: 16 }}>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        marginTop: 60,
        width: '100%',
    },

    listView: {
        flexDirection: 'column',
        marginBottom: 10,
    },

    textItem: {
        fontSize: 20,
    },
});

export default HelpScreen;

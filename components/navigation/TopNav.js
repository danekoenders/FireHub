import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TopNav = (props) => {
    const [tags, setTags] = useState(props.tags || []);

    return (
        <View style={styles.topNav}>
            <View style={styles.menu}>
                <TouchableOpacity style={styles.button}>
                    <Text>Call</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>Search</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>Settings</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.tags}>
                {tags.map((tag, index) => (
                    <Text key={index} style={styles.tag}>{tag}</Text>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    topNav: {
        flexDirection: 'column',
        padding: 10
    },
    menu: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DDD', // Example color for the button background
        padding: 10,
        borderRadius: 20,
        width: 80
    },
    tags: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        marginTop: 10
    },
    tag: {
        backgroundColor: '#EDEDED', // Example color for the tag background
        padding: 5,
        margin: 2,
        borderRadius: 10
    }
});

export default TopNav;

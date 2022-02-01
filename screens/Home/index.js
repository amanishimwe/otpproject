import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';


const HomeScreen = () => {
    return (
        <View style={styles.screen}>
            <View style={styles.inner}>
                <Text>Home Screen</Text>
            </View>
        </View>
    );
};

export default HomeScreen;

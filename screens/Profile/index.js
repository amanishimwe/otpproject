import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import { Button, Input } from 'react-native-elements';

const ProfileScreen = ({ navigation }) => {
    const [username, setUsername] = useState('')
    return (
        <View style={styles.screen}>
            <View style={styles.inner}>
                <Text> Profile Screen</Text>
                <Input
                    label="First Name"
                    value={username}
                />
                <Input
                    label="Last Name"
                    value={username}
                />
                <Input
                    label="Phone Number"
                    value={username}
                />
                <Button
                    title="Save"
                    onPress={() => navigation.navigate('Home')}
                />

                <View style={styles.formGroup}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.link}>
                            Skip
                        </Text>


                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default ProfileScreen;

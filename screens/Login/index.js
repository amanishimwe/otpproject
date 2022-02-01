import { View, Text } from 'react-native';
import React, { createRef, useState } from 'react';
import { styles } from './styles';
import { Button, Input } from 'react-native-elements';
import PhoneInput from 'react-native-phone-number-input';
import auth from '@react-native-firebase/auth'


const LoginScreen = ({ navigation }) => {
    const [value, setValue] = useState('')
    const [formattedValue, setFormattedValue] = useState('');
    const _phoneInput = createRef()
    const [confirm, setConfirm] = useState(null)
    const [code, setCode] = useState('')




    async function signInWithPhoneNumber(phoneNumber) {
        const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
        setConfirm(confirmation);
    }

    async function confirmCode() {
        try {
            await confirm.confirm(code);
            navigation.navigate('Home')
        } catch (error) {
            console.log('Invalid code.');
        }
    }


    if (!confirm) {
        return (
            <>
                <Text style={styles.headerText}> Enter Phone NUmber</Text>
                <View style={styles.formGroup}>
                    <PhoneInput
                        defaultCode='DM'
                        ref={_phoneInput}
                        layout="first"
                        onChangeText={(text) => {
                            setValue(text);
                        }}
                        onChangeFormattedText={(text) => {
                            setFormattedValue(text);
                        }}
                        defaultValue={value}
                        withDarkTheme
                        withShadow
                        autoFocus />
                </View>
                <View style={styles.formGroup}>
                    <Button title="Login" onPress={() => signInWithPhoneNumber(formattedValue)
                    } />
                </View>
            </>
        )
    }

    return (
        <View style={styles.screen}>
            <View style={styles.inner}>
                <Text style={styles.headerText}>Confirm Code</Text>
                <View style={styles.formGroup}>
                    <Input
                        value={code}
                        onChangeText={(value) => setCode(value)}
                        label="Codes"
                    />
                </View>
                <View style={styles.formGroup}>
                    <Button title="Login" onPress={() => signInWithPhoneNumber(formattedValue)} />
                </View>
            </View>
        </View>
    );
};

export default LoginScreen;

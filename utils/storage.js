import AsyncStorage from '@react-native-async-storage/async-storage'


const setAppHasLaunched = async () => {
    try {
        await AsyncStorage.setItem('@appLaunched', 'true')
    }
    catch (error) {
        console.log(error)
    }
}


const getAppLaunched = async (key) => {
    try {
        const value = await AsyncStorage.getItem('@appLaunched')

        if (value !== null) {
            return value
        }
    }
    catch (error) {
        console.log(error)
    }
}


export { setAppHasLaunched, getAppLaunched }
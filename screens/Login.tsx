import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';

import {StackProps} from '../types';

function Login({navigation}: StackProps) {
    useEffect(() => {
        setTimeout(() => navigation.replace('Home'), 333);
    }, []);
    return (
        <View>
            <Text>Login</Text>
            <Button title="goto Home"
                    onPress={() => navigation.replace('Home')} />
        </View>
    );
}
export default Login;

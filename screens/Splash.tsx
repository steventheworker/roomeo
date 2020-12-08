import React, {useEffect, useState} from 'react';
import {View, Text, Button, Image} from 'react-native';
import {StackProps} from '../types';

function Splash({navigation}: StackProps) {
    useEffect(() => {
        setTimeout(() => navigation.replace('Login'), 750);
    }, []);
    return (
        <View style={{justifyContent: 'center', alignItems: 'center',  flex: 1}}>
            <Text style={{color: "red", fontSize: 55}}>ROOMEO</Text>
            <Image
                style={{ width: 280, height: 280 }}
                source={require('../splash.png')}
            />
        </View>
    );
}
export default Splash;
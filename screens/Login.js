import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

var styles = require('../assets/js/Estilos')

class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Login</Text>
            </View>
        )
    }
}

export default Login;
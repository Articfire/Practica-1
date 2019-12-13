import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './Estilos';

class Temperatura extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Temperatura</Text>
            </View>
        )
    }
}

export default Temperatura;
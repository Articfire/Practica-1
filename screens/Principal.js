import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';

import styles from './Estilos'

class Principal extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Image source={require('../assets/images/robot-prod.png')}></Image>
                <Text>Bienvenido a la pantalla principal.</Text>
            </View>
        )
    }
}

export default Principal;
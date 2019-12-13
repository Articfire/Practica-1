import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './Estilos';

class Temperatura extends Component {
    constructor (props) {
        super(props)
        this.state = {
            gradosC: 0,
            gradosF: 0
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.label}>Calculadora de grados.</Text>

                <Text>Grados Celsius: {this.state.gradosC}</Text>
                <TextInput
                    style={styles.input_text}
                    placeholder='Grados C'
                    keyboardType='number-pad'
                    value={this.state.gradosC}
                    onChangeText={ (text) => {
                        this.setState({ gradosC: text })
                        this.setState({ gradosF: text*(9/5)+32 })
                    } }
                ></TextInput>

                <Text>Grados Fahrenheit: {this.state.gradosF}</Text>
                <TextInput
                    style={styles.input_text}
                    placeholder='Grados F'
                    keyboardType='number-pad'
                    value={this.state.gradosF}
                    onChangeText={ (text) => {
                        this.setState({ gradosF: text })
                        this.setState({ gradosC: (text-32)*(5/9) })
                    } }
                ></TextInput>
            </View>
        )
    }
}

export default Temperatura;
import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './Estilos'

class Diseño extends Component {
    constructor (props) {
        super(props)
        this.state = {
        }
    }

    render(){
        return(
            <View style={{ alignItems: 'center', justifyContent: 'center', margin: 5, flex:1, flexDirection: 'column' }}>
                <View style={{ margin: 5, flex:1, width: '100%', flexDirection: 'row' }}>
                    <View style={{ flex: 1, backgroundColor: 'red' }}></View>
                    <View style={{ flex: 1, backgroundColor: 'blue' }}></View>
                    <View style={{ flex: 2, backgroundColor: 'black' }}></View>
                </View>
                <View style={{ margin: 5, flex:1, width: '100%', flexDirection: 'row' }}>
                    <View style={{ flex: 2, backgroundColor: 'red' }}></View>
                    <View style={{ flex: 1, backgroundColor: 'blue' }}></View>
                    <View style={{ flex: 1, backgroundColor: 'black' }}></View>
                </View>
                <View style={{ margin: 5, flex:1, width: '100%', flexDirection: 'row' }}>
                    <View style={{ flex: 1, backgroundColor: 'red' }}></View>
                    <View style={{ flex: 2, backgroundColor: 'blue' }}></View>
                    <View style={{ flex: 1, backgroundColor: 'black' }}></View>
                </View>
                <View style={{ margin: 5, flex:1, width: '100%', flexDirection: 'row' }}>
                    <View style={{ flex: 1, backgroundColor: 'red' }}></View>
                    <View style={{ flex: 1, backgroundColor: 'blue' }}></View>
                    <View style={{ flex: 1, backgroundColor: 'black' }}></View>
                </View>
                <View style={{ margin: 5, flex:1, width: '100%', flexDirection: 'row' }}>
                    <View style={{ flex: 1, backgroundColor: 'red' }}></View>
                    <View style={{ flex: 1, backgroundColor: 'blue' }}></View>
                </View>
                <View style={{ margin: 5, flex:1, width: '100%', flexDirection: 'row', backgroundColor: 'black' }}></View>
            </View>
        )
    }
}

export default Diseño;
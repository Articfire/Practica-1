import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

import styles from './Estilos'

class Map extends Component {
    constructor (props) {
        super(props)
        this.state = {
            data : [
                {key: 'Android'}, {key: 'iOS'}, {key: 'Java'}, {key: 'Swift'},
                {key: 'Php'}, {key: 'Hadoop'}, {key: 'Sap'},
                {key: 'Python'}, {key: 'Ajax'}, {key: 'C++'},
                {key: 'Ruby'}, {key: 'Rails'}, {key: '.Net'},
                {key: 'Perl'}, {key: 'Sap'}, {key: 'Python'},
                {key: 'Ajax'}, {key: 'C++'}, {key: 'Ruby'},
                {key: 'Rails'}, {key: '.Net'}, {key: 'Perl'}
            ]
        }
    }

    render(){
        return(
            <View>
                <ScrollView>
                {
                    this.state.data.map((item, index) => (
                        <View style={styles.item} key={index}>
                            <Text>Articulo: {item.key}</Text>
                        </View>
                    ))
                }
                </ScrollView>
            </View>
        )
    }
}

export default Map;
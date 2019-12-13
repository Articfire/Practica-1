import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import styles from './Estilos';

class Login extends Component {
    constructor (props) {
        super(props)
        this.state = {
            usuario_actual: '',
			contraseña_actual: '',
			usuario_registrado: '',
			contraseña_registrada: '',
			estaRegistrado: false,
			haySesion: false,
        }
    }

	registrar(){
		this.setState({ usuario_registrado: this.state.usuario_actual })
		this.setState({ contraseña_registrada: this.state.contraseña_actual })
		this.setState({ estaRegistrado: true })
		this.setState({ haySesion: true })
		this.setState({ usuario_actual: '' })
		this.setState({ contraseña_actual: '' })
	}

	iniciarSesion(usuario, contraseña) {
		if (usuario == this.state.usuario_registrado && contraseña == this.state.contraseña_registrada) {
			this.setState({ haySesion: true })
		}
		this.setState({ usuario_actual: '' })
		this.setState({ contraseña_actual: '' })
	}

	cerrarSesion() {
		this.setState({ haySesion: false })
	}

    render() {
        return (
			<View style={styles.container}>

				{ this.state.haySesion ? (
					<View>
						<Text>Hola, {this.state.usuario_registrado}.</Text>
						<Button
							title='Cerrar sesion'
							color='red'
							onPress={ () => { this.cerrarSesion() } }
						></Button>
					</View>
				) : (
					<View>
						<TextInput
							style={styles.input_text}
							placeholder='Nombre de usuario'
							value={this.state.usuario_actual}
							onChangeText={ (usuario) => { this.setState({ usuario_actual: usuario }) } }
						></TextInput>

						<TextInput
							secureTextEntry={true}
							style={styles.input_text}
							placeholder='Contraseña'
							value={this.state.contraseña_actual}
							onChangeText={ (contraseña) => { this.setState({ contraseña_actual: contraseña }) } }
						></TextInput>

						{this.state.estaRegistrado ? (
							<Button
								title='Iniciar sesion'
								color='red'
								onPress={ () => { this.iniciarSesion(this.state.usuario_actual, this.state.contraseña_actual) } }
							></Button>
						) : (
							<Button
								title='Registrar'
								color='red'
								onPress={ () => { this.registrar() } }
							></Button>
						)}
					</View>
				) }

			</View>
        )
    }
}

export default Login;
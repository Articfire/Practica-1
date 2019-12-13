import { createStackNavigator } from 'react-navigation-stack'

var Tabs = require('./TabNavigator')

module.exports = createStackNavigator({
  Inicio: {screen: Tabs,
    navigationOptions: {
      title: 'Examen',
      headerStyle: {
          backgroundColor: '#e63030',
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
          fontWeight: 'bold',
      }
    },
  },
},
{
  initialRouteName: 'Inicio',
},
);
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import Principal from './screens/Principal';
import Login from './screens/Login';
import Temperatura from './screens/Temperatura';

const Tabs = createMaterialTopTabNavigator({
  Principal: {screen: Principal},
  Login: {screen: Login},
  Temperatura: {screen: Temperatura},
},
{
  tabBarOptions: {
    style: {
      backgroundColor: '#e63030',
    },
    indicatorStyle: {
      backgroundColor: '#fff',
    },
  }
},
)

const Stacks = createStackNavigator({
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

export default createAppContainer(Stacks)
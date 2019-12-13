import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import Principal from '../screens/Principal';
import Login from '../screens/Login';
import Temperatura from '../screens/Temperatura';

module.exports = createMaterialTopTabNavigator({
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
})
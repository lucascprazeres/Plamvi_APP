import * as React from 'react';
import {Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// import ProductsList from '../componentes/ProductsList';
import ProductRoutes from './Product.routes';
import {Icon} from 'react-native-elements';

const Tab = createMaterialTopTabNavigator();

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

export default function DashboardRoutes() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={ProductRoutes} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

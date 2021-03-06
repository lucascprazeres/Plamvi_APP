import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import Cadastro from "../screens/Cadastro";

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="loginScreen"
        component={Login}
        options={{
          headerShown: false,
          headerStyle: { backgroundColor: "tomato" },
        }}
      />
      <AppStack.Screen
        name="cadastro"
        component={Cadastro}
        navigationOptions={{
          headerLeft: null,
        }}
        options={{
          title: "Cadastro",
          headerStyle: { backgroundColor: "tomato" },
        }}
      />
    </AppStack.Navigator>
  );
};

export default AppRoutes;

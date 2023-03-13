import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { FormLogin } from "../components";
import { ScreenLogin, ScreenOnBoarding, ScreenRegister } from "../screen";

const Stack = createNativeStackNavigator();

class Router extends React.Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="OnBoarding"
          component={ScreenOnBoarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ScreenLogin"
          component={ScreenLogin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={ScreenRegister}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={FormLogin}
          render={(props) => <FormLogin {...props} />}
        />
      </Stack.Navigator>
    );
  }
}

export default Router;

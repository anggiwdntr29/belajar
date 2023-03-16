import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { FormLogin } from "../components";
import {
  ScreenCart,
  ScreenHome,
  ScreenLogin,
  ScreenOnBoarding,
  ScreenQRDetail,
  ScreenRegister,
} from "../screen";
import NavBar from "./ButtonNavigation";

const Stack = createNativeStackNavigator();

class Router extends React.Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="OnBoarding"
          component={ScreenOnBoarding}
          options={{
            headerShown: false,
            contentStyle: {
              backgroundColor: "#FFFFFF", // ubah warna background konten di sini
            },
          }}
        />

        <Stack.Screen
          name="ScreenLogin"
          component={ScreenLogin}
          options={{
            headerShown: false,
            contentStyle: {
              backgroundColor: "#FFFFFF", // ubah warna background konten di sini
            },
          }}
        />
        <Stack.Screen
          name="Register"
          component={ScreenRegister}
          options={{
            headerShown: false,
            contentStyle: {
              backgroundColor: "#FFFFFF", // ubah warna background konten di sini
            },
          }}
        />
        <Stack.Screen
          name="NavBar"
          component={NavBar}
          options={{
            headerShown: false,
            contentStyle: {
              backgroundColor: "#FFFFFF",
            },
          }}
        />
        <Stack.Screen
          name="QRDetail"
          component={ScreenQRDetail}
          options={{
            title: "QR Code",
            contentStyle: {
              backgroundColor: "#FFFFFF",
            },
          }}
        />
        <Stack.Screen name="Cart" component={ScreenCart} options={{}} />
      </Stack.Navigator>
    );
  }
}

export default Router;

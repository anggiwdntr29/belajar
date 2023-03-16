import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { FormLogin } from "../components";
import {
  ScreenCart,
  ScreenCourseDetail,
  ScreenHome,
  ScreenLogin,
  ScreenOnBoarding,
  ScreenPromo,
  ScreenQRDetail,
  ScreenRegister,
} from "../screen";
import NavBar from "./ButtonNavigation";
import { Warna } from "../components";

const Stack = createNativeStackNavigator();

class Router extends React.Component {
  render() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Warna.biru,
          },
          headerTintColor: Warna.putih,
        }}
      >
        <Stack.Screen
          name="OnBoarding"
          component={ScreenOnBoarding}
          options={{
            headerShown: false,
            contentStyle: {
              backgroundColor: "#FFFFFF",
            },
          }}
        />

        <Stack.Screen
          name="ScreenLogin"
          component={ScreenLogin}
          options={{
            headerShown: false,
            contentStyle: {
              backgroundColor: "#FFFFFF",
            },
          }}
        />
        <Stack.Screen
          name="Register"
          component={ScreenRegister}
          options={{
            headerShown: false,
            contentStyle: {
              backgroundColor: "#FFFFFF",
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
        <Stack.Screen name="Cart" component={ScreenCart} />
        <Stack.Screen
          name="CourseDetail"
          component={ScreenCourseDetail}
          options={{
            title: "QR Code",
          }}
        />
      </Stack.Navigator>
    );
  }
}

export default Router;

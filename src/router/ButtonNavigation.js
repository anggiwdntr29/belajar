import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ScreenHome, ScreenCourse, ScreenPromo } from "../screen";
import Ionicons from "react-native-vector-icons/Ionicons";
import { FontAwesome5, Feather } from "@expo/vector-icons";
import { Warna } from "../components";

const Tab = createBottomTabNavigator();

function NavBar() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Warna.biru,
        },
        headerTintColor: Warna.putih,
      }}
    >
      <Tab.Screen
        name="Home"
        component={ScreenHome}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="home" size={24} color={Warna.biru} />
            ) : (
              <Ionicons name="home-outline" size={24} color={Warna.secondary} />
            ),
        }}
      />
      <Tab.Screen
        name="Course"
        component={ScreenCourse}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="newspaper" size={24} color={Warna.biru} />
            ) : (
              <Ionicons
                name="newspaper-outline"
                size={24}
                color={Warna.secondary}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Promo"
        component={ScreenPromo}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesome5 name="percentage" size={24} color={Warna.biru} />
            ) : (
              <Feather name="percent" size={24} color={Warna.secondary} />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

export default NavBar;

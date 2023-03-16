import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ScreenHome, ScreenCourse, ScreenPromo } from "../screen";
import Ionicons from "react-native-vector-icons/Ionicons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Warna } from "../components";

const Tab = createBottomTabNavigator();

function NavBar() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={ScreenHome}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="home" size={24} color={Warna.primary} />
            ) : (
              <Ionicons name="home-outline" size={24} color={Warna.secondary} />
            ),
        }}
      />
      <Tab.Screen
        name="Course"
        component={ScreenCourse}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="newspaper" size={24} color={Warna.primary} />
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
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesome5 name="percentage" size={24} color={Warna.primary} />
            ) : (
              <FontAwesome5
                name="percentage"
                size={24}
                color={Warna.secondary}
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

export default NavBar;

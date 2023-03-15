import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ScreenHome from "../screen/Home";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Feather } from "@expo/vector-icons";
import { Warna } from "../components";
import { ScreenCourse } from "../screen";

const Tab = createBottomTabNavigator();

function NavBar() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          }
          if (route.name === "Course") {
            iconName = focused ? "ios-newspaper" : "ios-newspaper-outline";
          }
          return <Ionicons name={iconName} size={size} color={Warna.primary} />;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={ScreenHome}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Course"
        component={ScreenCourse}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default NavBar;

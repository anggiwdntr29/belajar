import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ScreenHome from "../screen/Home";

const Tab = createBottomTabNavigator();

function NavBar() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={ScreenHome}
        options={{
          headerShown: false,
          contentStyle: {
            backgroundColor: "#FFFFFF", // ubah warna background konten di sini
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default NavBar;

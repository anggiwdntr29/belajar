import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Router from "./src/router";

function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <SafeAreaView style={{ flex: 1, marginTop: 20 }}>
        <Router />
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;

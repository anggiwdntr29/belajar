import React from "react";
import { Text, NativeBaseProvider, Center } from "native-base";

function ScreenHome() {
  return (
    <NativeBaseProvider>
      <Center flex={1} bg="#fff">
        <Text>Home</Text>
      </Center>
    </NativeBaseProvider>
  );
}

export default ScreenHome;

import {
  Checkbox,
  HStack,
  Image,
  NativeBaseProvider,
  Text,
  VStack,
} from "native-base";
import React from "react";

const ScreenCart = () => {
  return (
    <NativeBaseProvider>
      <HStack>
        <Checkbox value="test"></Checkbox>
        <Image
          source={{ uri: "https://picsum.photos/1200" }}
          h={"100px"}
          w={"120px"}
        />
        <VStack>
          <Text>Robotik</Text>
          <Text>Rp1000.000</Text>
        </VStack>
      </HStack>
    </NativeBaseProvider>
  );
};
export default ScreenCart;

import {
  Box,
  Flex,
  Image,
  NativeBaseProvider,
  Center,
  Text,
  Button,
  ScrollView,
} from "native-base";
import React from "react";
import { Dimensions } from "react-native";
import { CardPromo } from "../../components";
import listPromo from "../../components/Data/listPromo";
import { Warna } from "../../components/Style";

const screenWidth = Dimensions.get("window").width;

const ScreenPromo = () => {
  return (
    <NativeBaseProvider>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CardPromo
          p={5}
          flexDirection={"row"}
          flexWrap={"wrap"}
          width={screenWidth}
          justify={"space-between"}
          lebar={180}
          bg={"white"}
          shadow={1}
        />
      </ScrollView>
    </NativeBaseProvider>
  );
};
export default ScreenPromo;

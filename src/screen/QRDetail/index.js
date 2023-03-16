import {
  Center,
  Box,
  Icon,
  IconButton,
  NativeBaseProvider,
  Text,
  ZStack,
  Pressable,
} from "native-base";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { QRComponent, Warna } from "../../components";

const ScreenQRDetail = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <Center>
        <Text my={10}>Anggi Widiantara</Text>
        <QRComponent size={200} />
      </Center>
    </NativeBaseProvider>
  );
};

export default ScreenQRDetail;

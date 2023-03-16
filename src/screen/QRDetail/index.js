import {
  Center,
  Box,
  Icon,
  IconButton,
  NativeBaseProvider,
  Text,
  ZStack,
  Pressable,
  Avatar,
} from "native-base";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { QRComponent, Warna } from "../../components";

const ScreenQRDetail = () => {
  const username = "Anggi Widiantara";
  const initial = username.charAt(0).toUpperCase();

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <NativeBaseProvider>
      <Center mt={10}>
        <Avatar bg={Warna.primary} size={16}>
          <Text fontSize={"4xl"} fontWeight={"bold"} color={"white"}>
            {initial}
          </Text>
        </Avatar>
        <Text mt={2} mb={10} fontSize={"xl"} fontWeight={"semibold"}>
          Anggi Widiantara
        </Text>
        <Box p={2} bg={Warna.primary}>
          <QRComponent size={240} />
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};

export default ScreenQRDetail;

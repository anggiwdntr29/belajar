import React from "react";
import {
  NativeBaseProvider,
  HStack,
  VStack,
  Text,
  IconButton,
  Icon,
  Center,
  Pressable,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import QRComponent from "../QR";
import { Warna } from "../Style";

function HeaderHome({ navigation }) {
  return (
    <NativeBaseProvider>
      <VStack w={"100%"} bg={Warna.primary} px={5} pt={2} pb={4}>
        <HStack justifyContent={"space-between"}>
          <VStack>
            <Text fontSize={"xl"} fontWeight={"semibold"} color={"white"}>
              Anggi Widiantara
            </Text>
            <Text fontSize={"md"} fontWeight={"normal"} color={"white"}>
              What do you want to learn?
            </Text>
          </VStack>

          <IconButton
            icon={
              <Icon
                as={Ionicons}
                name="cart-outline"
                size={8}
                color={"white"}
              />
            }
            variant="unstyled"
            onPress={() => navigation.navigate("ScreenLogin")}
          />
        </HStack>
        <Pressable onPress={() => navigation.navigate("ScreenLogin")}>
          <HStack
            space={5}
            alignItems={"center"}
            bg={Warna.putih}
            p={5}
            mt={2}
            borderRadius={10}
          >
            <QRComponent size={80} />
            <VStack>
              <Text fontSize={"md"}>
                Status :{" "}
                <Text color={Warna.primary} fontWeight={"semibold"}>
                  Active
                </Text>
              </Text>
              <Text fontSize={"md"}>Until 12 Desember 2023</Text>
            </VStack>
          </HStack>
        </Pressable>
      </VStack>
    </NativeBaseProvider>
  );
}

export default HeaderHome;

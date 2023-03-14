import React, { Component } from "react";
import {
  NativeBaseProvider,
  Stack,
  Text,
  Center,
  Pressable,
  Avatar,
  HStack,
} from "native-base";
import { FormRegister, Warna } from "../../components";

function ScreenRegister({ navigation }) {
  return (
    <NativeBaseProvider>
      <Center p={10}>
        <Stack w={"100%"}>
          <Text fontSize={"2xl"} fontWeight={"semibold"} color={Warna.primary}>
            Create Account
          </Text>
          <Text
            fontSize={"md"}
            fontWeight={"light"}
            textAlign={"justify"}
            mt={1}
            mb={5}
          >
            Register an account and join Koding Akademi
          </Text>
        </Stack>
        <FormRegister navigation={navigation} />
        <HStack>
          <Text fontSize={"xs"}>Already have an account? </Text>
          <Pressable onPress={() => navigation.replace("ScreenLogin")}>
            <Text fontSize={"xs"} fontWeight={"semibold"} color={Warna.primary}>
              Login here!
            </Text>
          </Pressable>
        </HStack>
        <Stack alignItems={"center"}>
          <Text fontWeight={"thin"} fontSize={"sm"} mt={5} mb={5}>
            Or continue with
          </Text>
          <Pressable
            onPress={() => {
              Linking.openURL("https://www.google.com");
            }}
          >
            <Avatar size={10} source={require("../../../assets/google.png")} />
          </Pressable>
        </Stack>
      </Center>
    </NativeBaseProvider>
  );
}

export default ScreenRegister;

import { useNavigation } from "@react-navigation/native";
import {
  Text,
  NativeBaseProvider,
  Center,
  Avatar,
  Button,
  Pressable,
  Stack,
} from "native-base";
import React from "react";

function ScreenOnBoarding() {
  const navigation = useNavigation();
  return (
    <NativeBaseProvider>
      <Center flex={1} px={10}>
        <Avatar size="200px" />
        <Text fontSize={"2xl"} fontWeight={"semibold"} mt={10} mb={2}>
          Koding Akademi Mobile
        </Text>
        <Text
          fontSize={"md"}
          fontWeight={"light"}
          w={"100%"}
          textAlign={"justify"}
        >
          Welcome to the Koding Academy Mobile App!
        </Text>
        <Button
          variant={"outline"}
          borderRadius={10}
          w={"100%"}
          h={12}
          border
          mt={8}
          mb={5}
          onPress={() => navigation.replace("Register")}
        >
          <Text fontSize={"md"}>Register</Text>
        </Button>
        <Button
          variant={"solid"}
          borderRadius={10}
          w={"100%"}
          h={12}
          onPress={() => navigation.replace("ScreenLogin")}
        >
          <Text color={"white"} fontSize={"md"}>
            Login
          </Text>
        </Button>
        <Stack alignItems={"center"}>
          <Text fontWeight={"thin"} fontSize={"sm"} mt={10} mb={5}>
            Or continue with
          </Text>
          <Pressable
            onPress={() => {
              Linking.openURL("https://www.google.com");
            }}
          >
            <Avatar size={10} />
          </Pressable>
        </Stack>
      </Center>
    </NativeBaseProvider>
  );
}

export default ScreenOnBoarding;

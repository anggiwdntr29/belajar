import React from "react";
import {
  NativeBaseProvider,
  Center,
  Text,
  Stack,
  Pressable,
  HStack,
  Avatar,
} from "native-base";
import { FormLogin } from "../../components";

function ScreenLogin({ navigation }) {
  return (
    <NativeBaseProvider>
      <Center p={10}>
        <Stack w="100%" mb={2}>
          <Text fontSize="24px" fontWeight="semibold">
            Login to Continue
          </Text>
          <Text fontSize="16px" fontWeight="light">
            Log in to your account and continue your learning journey in Koding
            Akademi.
          </Text>
        </Stack>
        <FormLogin navigation={navigation} />
        <HStack>
          <Text fontSize={"xs"}>Don't have an account? </Text>
          <Pressable onPress={() => navigation.replace("Register")}>
            <Text fontSize={"xs"} fontWeight={"semibold"}>
              Register here!
            </Text>
          </Pressable>
        </HStack>

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

export default ScreenLogin;

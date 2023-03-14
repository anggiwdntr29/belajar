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
import { Warna } from "../../components/";
function ScreenOnBoarding() {
  const navigation = useNavigation();
  return (
    <NativeBaseProvider>
      <Center flex={1} px={10}>
        <Avatar size="200px" source={require("../../../assets/logo.png")} />
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
          bgColor={Warna.putih}
          variant={"unstyled"}
          borderWidth={1}
          borderRadius={10}
          borderColor={Warna.primary}
          w={"100%"}
          h={12}
          border
          mt={8}
          mb={5}
          onPress={() => navigation.replace("Register")}
        >
          <Text fontSize={"md"} color={Warna.primary}>
            Register
          </Text>
        </Button>
        <Button
          bg={Warna.primary}
          variant={"unstyled"}
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
            <Avatar size={10} source={require("../../../assets/google.png")} />
          </Pressable>
        </Stack>
      </Center>
    </NativeBaseProvider>
  );
}

export default ScreenOnBoarding;

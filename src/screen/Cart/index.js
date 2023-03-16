import {
  Checkbox,
  HStack,
  Image,
  NativeBaseProvider,
  ScrollView,
  Text,
  Stack,
  VStack,
  IconButton,
  Icon,
  Button,
} from "native-base";
import { Warna } from "../../components";
import React from "react";
import { Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";

const screenWidth = Dimensions.get("window").width;

const ScreenCart = () => {
  return (
    <NativeBaseProvider>
      <VStack space={2} my={2}>
        <HStack space={5} bg={Warna.putih} padding={3} w={screenWidth}>
          <Checkbox
            value="test"
            accessibilityLabel="This is a dummy checkbox"
            flex={1}
            colorScheme="yellow"
            borderColor={Warna.primary}
          ></Checkbox>
          <Image
            source={{ uri: "https://picsum.photos/1200" }}
            alt={"img"}
            h={"100px"}
            w={"120px"}
            borderRadius={10}
          />
          <Stack w={"200px"}>
            <Text fontSize={"sm"} fontWeight={"semibold"} h={"48px"}>
              Game Programming for Intermediate
            </Text>
            <Text fontSize={"md"} fontWeight={"semibold"}>
              Rp705.000
            </Text>
            <IconButton
              variant={"unstyled"}
              icon={
                <Icon as={Feather} name="trash-2" size={5} color={"red.500"} />
              }
              justifyContent={"end"}
              size={5}
              mt={2}
            />
          </Stack>
        </HStack>
        <HStack space={5} bg={Warna.putih} padding={3} w={screenWidth}>
          <Checkbox
            value="test"
            accessibilityLabel="This is a dummy checkbox"
            flex={1}
            colorScheme="yellow"
            borderColor={Warna.primary}
          ></Checkbox>
          <Image
            source={{ uri: "https://picsum.photos/1200" }}
            alt={"img"}
            h={"100px"}
            w={"120px"}
            borderRadius={10}
          />
          <Stack w={"200px"}>
            <Text fontSize={"sm"} fontWeight={"semibold"} h={"48px"}>
              Game Programming for Intermediate
            </Text>
            <Text fontSize={"md"} fontWeight={"semibold"}>
              Rp705.000
            </Text>
            <IconButton
              variant={"unstyled"}
              icon={
                <Icon as={Feather} name="trash-2" size={5} color={"red.500"} />
              }
              justifyContent={"end"}
              size={5}
              mt={2}
            />
          </Stack>
        </HStack>
        {/* <HStack space={5} bg={Warna.putih} padding={3} w={screenWidth}>
          <Checkbox
            value="test"
            accessibilityLabel="This is a dummy checkbox"
            flex={1}
            colorScheme="yellow"
            borderColor={Warna.primary}
          ></Checkbox>
          <Image
            source={{ uri: "https://picsum.photos/1200" }}
            alt={"img"}
            h={"100px"}
            w={"120px"}
            borderRadius={10}
          />
          <Stack w={"200px"}>
            <Text fontSize={"sm"} fontWeight={"semibold"} h={"48px"}>
              Game Programming for Intermediate
            </Text>
            <Text fontSize={"md"} fontWeight={"semibold"}>
              Rp705.000
            </Text>
            <Button
              bg={"red.500"}
              mt={2}
              borderRadius={10}
              variant={"unstyled"}
            >
              Delete
            </Button>
          </Stack>
        </HStack> */}
      </VStack>
    </NativeBaseProvider>
  );
};
export default ScreenCart;

import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import {
  Box,
  NativeBaseProvider,
  Pressable,
  HStack,
  Input,
  Text,
  VStack,
  Icon,
  Stack,
  Image,
  Container,
  Center,
  Heading,
  Button,
  ScrollView,
} from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Warna } from "../../components";

export default function ScreenCourse() {
  const navigation = useNavigation();

  return (
    <NativeBaseProvider>
      <Container maxWidth={"100%"} maxH={"100%"} alignItems={"center"}>
        <Box
          w={"100%"}
          h={"54px"}
          alignItems={"center"}
          bgColor={Warna.primary}
          justifyContent={"center"}
          mb={3}
          shadow={1}
        >
          <Text fontSize={"sm"} fontWeight={"semibold"} color={Warna.putih}>
            Course
          </Text>
        </Box>
        <Box alignItems="center" px={2} mb={3}>
          <Input
            borderRadius={35}
            bgColor={"white"}
            placeholder="Search"
            w="100%"
            InputLeftElement={
              <Icon as={<FontAwesome name="search" />} size={5} ml="5" />
            }
          />
        </Box>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <HStack space={3} px={2} mb={3}>
            <Button
              size={"sm"}
              w={"auto"}
              onPress={() => console.log("hello world")}
              borderRadius={35}
            >
              Coding
            </Button>
            <Button
              variant={"outline"}
              size={"sm"}
              w={"auto"}
              onPress={() => console.log("hello world")}
              borderRadius={35}
            >
              App Programming
            </Button>

            <Button
              size={"sm"}
              w={"auto"}
              onPress={() => console.log("hello world")}
              borderRadius={35}
            >
              App Programming
            </Button>
            <Button
              size={"sm"}
              w={"auto"}
              onPress={() => console.log("hello world")}
              borderRadius={35}
            >
              App Programming
            </Button>
          </HStack>
        </ScrollView>
        <Stack w={"100%"} h={"auto"} px={2}>
          <Stack w={"100%"} h={"auto"} borderColor={"amber.600"} space={4}>
            <Pressable onPress={() => navigation.navigate("CourseDetail")}>
              <VStack>
                <Box
                  bg="white"
                  borderRadius="10"
                  borderWidth={1}
                  borderColor={Warna.disabled}
                  flexDirection="row"
                  alignItems="center"
                  p={2}
                  w={"100%"}
                >
                  <Image
                    source={{
                      uri: "https://picsum.photos/200/300",
                    }}
                    alt="random image"
                    w={"30%"}
                    h={101}
                    borderRadius={10}
                    mr={4}
                  />
                  <Box w={"65%"}>
                    <Text fontSize="sm" fontWeight="semibold">
                      Basic Coding Test
                    </Text>
                    <Text
                      mt={2}
                      fontSize={"2xs"}
                      fontWeight={"light"}
                      textAlign={"justify"}
                    >
                      Basic coding is an introductory for kids to learn about
                      programming in a fun and enjoyable way.
                    </Text>

                    <Stack
                      direction={"row"}
                      justifyContent={"space-between"}
                      mt={2}
                    >
                      <Text
                        strikeThrough
                        fontSize={"sm"}
                        fontWeight={"medium"}
                        color={Warna.disabled}
                      >
                        Rp705.000
                      </Text>
                      <Text fontSize={"sm"} fontWeight={"medium"}>
                        Rp705.000
                      </Text>
                    </Stack>
                  </Box>
                </Box>
              </VStack>
            </Pressable>
          </Stack>
        </Stack>
      </Container>
    </NativeBaseProvider>
  );
}

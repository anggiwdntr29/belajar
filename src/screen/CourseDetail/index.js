import {
  Center,
  NativeBaseProvider,
  Box,
  Image,
  Container,
  Heading,
  Button,
  Flex,
  Stack,
  Text,
  extendTheme,
  ScrollView,
} from "native-base";
import React from "react";
import { View } from "react-native";
import { Warna } from "../../components";

export default function ScreenCourseDetail() {
  const theme = extendTheme({
    colors: {
      custom: {
        50: "#ecfeff",
        100: "#67e8f9",
        200: "#22d3ee",
        300: "#06b6d4",
        400: "#0891b2",
        500: "#0e7490",
        600: "#F9AD0A",
        700: "#164e63",
        800: "#174e63",
        900: "#184e63",
      },
    },
    components: {
      Button: {
        defaultProps: {
          colorScheme: "custom",
        },
      },
    },
  });
  return (
    <NativeBaseProvider theme={theme}>
      <Container borderColor={Warna.primary} maxWidth={"100%"} h={"100%"}>
        <Image
          source={{
            uri: "https://picsum.photos/200/300",
          }}
          alt="random image"
          w={"100%"}
          h={"40%"}
        />

        <Stack w={"100%"} h={"60%"} justifyContent={"space-between"} p={15}>
          <Heading fontWeight={"semibold"} fontSize={"xl"}>
            Coding Explorer ASA 2.0
          </Heading>
          <Text fontWeight={"medium"} fontSize={"md"} py={2}>
            Rp. 570.000
          </Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Box>
              <Text fontWeight={"medium"} fontSize={"sm"} pb={1}>
                Description
              </Text>
              <Text fontWeight={"light"} fontSize={"xs"} textAlign={"justify"}>
                Coding Explorer 2.0 in this program we will learn to create
                programs or games with Sprites and Backdrops created by children
                themselves in the Scratch application.Coding Explorer 2.0 in
                this program we will learn to create programs or games with
                Sprites and Backdrops created by children themselves in the
                Scratch application.Coding Explorer 2.0 in this program we will
                learn to create programs or games with Sprites and Backdrops
                created by children themselves in the Scratch application.Coding
                Explorer 2.0 in this program we will learn to create programs or
                games with Sprites and Backdrops created by children themselves
                in the Scratch application.
              </Text>
              <Text fontWeight={"medium"} fontSize={"sm"} py={1}>
                Requirements
              </Text>
              <Text fontWeight={"light"} fontSize={"xs"}>
                Able to use keyboard or mouse (Computer Skill).
              </Text>

              <Text fontWeight={"light"} fontSize={"xs"}>
                Age : 7-10 years
              </Text>
              <Text fontWeight={"light"} fontSize={"xs"}>
                Meetings : 4x a week
              </Text>
              <Text fontWeight={"light"} fontSize={"xs"}>
                Period : 1 month
              </Text>
              <Text fontWeight={"light"} fontSize={"xs"}>
                Duration : 90 minutes/meeting
              </Text>
              <Text fontWeight={"light"} fontSize={"xs"}>
                Class consists of 2-5 people
              </Text>
            </Box>
          </ScrollView>

          <Box flexDirection={"row"} justifyContent={"space-between"} pt={5}>
            <Button
              w={"162"}
              onPress={() => console.log("hello world")}
              borderRadius={10}
              bgColor={Warna.primary}
            >
              Click Me
            </Button>
            <Button
              w={"162"}
              variant={"outline"}
              onPress={() => console.log("hello world")}
              borderRadius={10}
              borderColor={Warna.primary}
              colorScheme={"custom"}
            >
              Click Me
            </Button>
          </Box>
        </Stack>
      </Container>
    </NativeBaseProvider>
  );
}

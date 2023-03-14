import React from "react";
import {
  Text,
  NativeBaseProvider,
  Center,
  ScrollView,
  HStack,
  Stack,
  VStack,
} from "native-base";
import {
  BannerSlider,
  CardMyCourse,
  HeaderHome,
  QRComponent,
  Warna,
} from "../../components";

function ScreenHome({ navigation }) {
  return (
    <NativeBaseProvider>
      <ScrollView>
        <VStack space={1}>
          <HeaderHome navigation={navigation} />
          <VStack bg={Warna.putih} pt={2} pb={5}>
            <HStack
              justifyContent={"space-between"}
              alignItems={"center"}
              px={5}
              pb={2}
            >
              <Text fontSize={"xl"} fontWeight={"semibold"}>
                My Course
              </Text>
            </HStack>
            <CardMyCourse />
          </VStack>
          <VStack bg={Warna.putih} pt={2} pb={5}>
            <HStack
              justifyContent={"space-between"}
              alignItems={"center"}
              px={5}
              pb={2}
            >
              <Text fontSize={"xl"} fontWeight={"semibold"}>
                Latest Events
              </Text>
              <Text
                fontSize={"sm"}
                fontWeight={"light"}
                color={Warna.primary}
                underline
              >
                See all
              </Text>
            </HStack>
            <BannerSlider />
          </VStack>
        </VStack>
      </ScrollView>
    </NativeBaseProvider>
  );
}

export default ScreenHome;

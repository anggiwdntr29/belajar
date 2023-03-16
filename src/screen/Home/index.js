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
  CardArtikel,
  CardMyCourse,
  CardPromo,
  HeaderHome,
  Warna,
} from "../../components";

function ScreenHome({ navigation }) {
  return (
    <NativeBaseProvider>
      <ScrollView showsVerticalScrollIndicator={false}>
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
              <Text
                fontSize={"sm"}
                fontWeight={"light"}
                color={Warna.primary}
                underline
              >
                See all
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
            <Stack>
              <BannerSlider />
            </Stack>
          </VStack>
          <VStack bg={Warna.putih} pt={2} pb={5}>
            <HStack
              justifyContent={"space-between"}
              alignItems={"center"}
              px={5}
              pb={2}
            >
              <Text fontSize={"xl"} fontWeight={"semibold"}>
                Article
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
            <CardArtikel />
          </VStack>
          <VStack bg={Warna.putih} pt={2} pb={5}>
            <HStack
              justifyContent={"space-between"}
              alignItems={"center"}
              px={5}
              pb={2}
            >
              <VStack>
                <Text fontSize={"xl"} fontWeight={"semibold"}>
                  Course Promo
                </Text>
                <Text fontSize={"sm"} fontWeight={"light"}>
                  Learning promo, limited time. Grab it fast!
                </Text>
              </VStack>
              <Text
                fontSize={"sm"}
                fontWeight={"light"}
                color={Warna.primary}
                underline
              >
                See all
              </Text>
            </HStack>
            <CardPromo />
          </VStack>
        </VStack>
      </ScrollView>
    </NativeBaseProvider>
  );
}

export default ScreenHome;

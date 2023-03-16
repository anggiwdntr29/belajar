import React from "react";
import {
  Text,
  NativeBaseProvider,
  Center,
  ScrollView,
  HStack,
  Stack,
  VStack,
  Pressable,
  Button,
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
              <Button
                onPress={() => navigation.navigate("Promo")}
                variant={"unstyled"}
              >
                <Text
                  fontSize={"sm"}
                  fontWeight={"light"}
                  color={Warna.primary}
                  underline
                >
                  See all
                </Text>
              </Button>
            </HStack>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              px={5}
            >
              <CardMyCourse flexDirection={"row"} />
            </ScrollView>
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

              <Button
                onPress={() => navigation.navigate("Promo")}
                variant={"unstyled"}
              >
                <Text
                  fontSize={"sm"}
                  fontWeight={"light"}
                  color={Warna.primary}
                  underline
                >
                  See all
                </Text>
              </Button>
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
              <Button
                onPress={() => navigation.navigate("Promo")}
                variant={"unstyled"}
              >
                <Text
                  fontSize={"sm"}
                  fontWeight={"light"}
                  color={Warna.primary}
                  underline
                >
                  See all
                </Text>
              </Button>
            </HStack>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              px={5}
            >
              <CardArtikel flexDirection={"row"} />
            </ScrollView>
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
              <Button
                onPress={() => navigation.navigate("Promo")}
                variant={"unstyled"}
              >
                <Text
                  fontSize={"sm"}
                  fontWeight={"light"}
                  color={Warna.primary}
                  underline
                >
                  See all
                </Text>
              </Button>
            </HStack>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              px={5}
            >
              <CardPromo
                flexDirection={"row"}
                mr={8}
                Bmr={2}
                lebar={160}
                shadow={1}
                bg={Warna.putih}
              />
            </ScrollView>
          </VStack>
        </VStack>
      </ScrollView>
    </NativeBaseProvider>
  );
}

export default ScreenHome;

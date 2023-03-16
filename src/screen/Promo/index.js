import {
  Box,
  Flex,
  Image,
  NativeBaseProvider,
  Center,
  Text,
  Button,
} from "native-base";
import React from "react";
import { Dimensions } from "react-native";
import listPromo from "../../components/Data/listPromo";
import { Warna } from "../../components/Style";

const screenWidth = Dimensions.get("window").width;

const ScreenPromo = () => {
  return (
    <NativeBaseProvider>
      <Flex
        borderWidth={1}
        w={screenWidth}
        p={5}
        flex={1}
        flexWrap={"wrap"}
        flexDirection={"row"}
        justify={"space-between"}
      >
        {listPromo.map((Promo) => (
          <Box
            key={Promo.id}
            w={"160px"}
            borderWidth={1}
            borderColor={Warna.primary}
            borderRadius={10}
            padding={2}
          >
            <Center>
              <Image
                source={{ uri: `${Promo.image}` }}
                alt={"img"}
                w={"160px"}
                h={"100px"}
                borderRadius={10}
              />
            </Center>
            <Text
              mt={2}
              h={"48px"}
              fontSize={"sm"}
              fontWeight={"medium"}
              color={Warna.primary}
            >
              {Promo.title}
            </Text>
            <Text
              fontSize={"sm"}
              fontWeight={"light"}
              strikeThrough
              color={Warna.secondary}
            >
              {Promo.OldPrice}
            </Text>
            <Text fontSize={"md"} fontWeight={"medium"}>
              {Promo.NewPrice}
            </Text>
            <Button
              my={2}
              borderRadius={10}
              variant={"unstyled"}
              bg={Warna.primary}
            >
              <Text fontWeight={"semibold"} color={Warna.putih}>
                Add to cart
              </Text>
            </Button>
          </Box>
        ))}
      </Flex>
    </NativeBaseProvider>
  );
};
export default ScreenPromo;

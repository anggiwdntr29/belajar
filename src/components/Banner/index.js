import {
  Box,
  Center,
  HStack,
  Image,
  NativeBaseProvider,
  ScrollView,
  Text,
} from "native-base";
import React from "react";
import Banner from "../Data/Banner";

const BannerSlider = () => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <Center>
        <HStack space={2} px={5}>
          {Banner.map((image) => (
            <Box key={image.id} borderRadius={10}>
              <Image
                source={{ uri: image.image }}
                alt={"alt"}
                borderRadius={10}
                w={360}
                h={"140px"}
                resizeMode="cover"
              />
            </Box>
          ))}
        </HStack>
      </Center>
    </ScrollView>
  );
};

export default BannerSlider;

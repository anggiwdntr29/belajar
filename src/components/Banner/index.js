import React from "react";
import {
  View,
  Image,
  Box,
  NativeBaseProvider,
  HStack,
  ScrollView,
  Center,
} from "native-base";
import Swiper from "react-native-swiper";
import Banner from "../Data/Banner";
import { Warna } from "../Style";

const BannerSlider = () => {
  return (
    <NativeBaseProvider>
      <Swiper
        autoplay={true}
        loop={true}
        height={140}
        paginationStyle={{ bottom: 5 }}
        dotColor={Warna.secondary}
        activeDotColor={Warna.primary}
        style={{ overflow: "hidden" }}
      >
        {Banner.map((Banner) => (
          <Center key={Banner.id} mx={5}>
            <Image
              source={{ uri: `${Banner.image}` }}
              alt={"img"}
              w={"100%"}
              h={140}
              borderRadius={10}
            />
          </Center>
        ))}
      </Swiper>
    </NativeBaseProvider>
  );
};

export default BannerSlider;

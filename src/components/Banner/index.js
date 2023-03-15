import React from "react";
import {
  View,
  Image,
  Box,
  NativeBaseProvider,
  HStack,
  ScrollView,
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
      >
        {Banner.map((Banner) => (
          <Image
            key={Banner.id}
            source={{ uri: `${Banner.image}` }}
            alt={"img"}
            w={"100%"}
            h={140}
            borderRadius={10}
          />
        ))}
      </Swiper>
    </NativeBaseProvider>
  );
};

export default BannerSlider;

import React from "react";
import { View, Image } from "native-base";
import Swiper from "react-native-swiper";
import Banner from "../Data/Banner";

const BannerSlider = () => {
  return (
    <View>
      <Swiper autoplay autoplayTimeout={5} height={140} showsPagination={false}>
        {Banner.map((image) => (
          <Image
            key={image.id}
            source={{ uri: `${image.image}` }}
            h={140}
            alt={"img"}
          />
        ))}
      </Swiper>
    </View>
  );
};

export default BannerSlider;

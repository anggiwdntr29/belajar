import React from "react";
import {
  Text,
  NativeBaseProvider,
  Center,
  ScrollView,
  HStack,
  Stack,
} from "native-base";
import { CardMyCourse, HeaderHome, QRComponent } from "../../components";

function ScreenHome({ navigation }) {
  return (
    <NativeBaseProvider>
      <HeaderHome navigation={navigation} />
      <ScrollView>
        <CardMyCourse />
      </ScrollView>
    </NativeBaseProvider>
  );
}

export default ScreenHome;

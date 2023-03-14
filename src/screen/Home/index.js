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
        <ScrollView>
          <HStack>
            <CardMyCourse />
          </HStack>
        </ScrollView>
      </ScrollView>
    </NativeBaseProvider>
  );
}

export default ScreenHome;

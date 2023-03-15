import { Center, NativeBaseProvider } from "native-base";
import React from "react";
import { QRComponent } from "../../components";

const ScreenQRDetail = () => {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Text>Anggi Widiantara</Text>
        <QRComponent size={200} />
      </Center>
    </NativeBaseProvider>
  );
};

export default ScreenQRDetail;

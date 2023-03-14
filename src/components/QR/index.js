import QRCode from "react-native-qrcode-svg";
import React from "react";

const QRComponent = ({ size }) => {
  return (
    <QRCode
      value="google.com"
      size={size}
      color="black"
      backgroundColor="white"
    />
  );
};

export default QRComponent;

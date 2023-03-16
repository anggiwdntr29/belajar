import { width } from "deprecated-react-native-prop-types/DeprecatedImagePropType";
import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Image,
  NativeBaseProvider,
  ScrollView,
  Text,
} from "native-base";
import Promo from "../../Data/Promo";
import { Warna } from "../../Style/index";

const CardPromo = ({
  width,
  flexDirection,
  flexWrap,
  justify,
  mr,
  p,
  lebar,
  mb,
  bg,
  bw,
  Bmr,
  shadow,
}) => {
  return (
    <NativeBaseProvider>
      <Flex
        width={width}
        flexDirection={flexDirection}
        mr={mr}
        flexWrap={flexWrap}
        justify={justify}
        p={p}
      >
        {Promo.map((Promo) => (
          <Box
            key={Promo.id}
            w={lebar}
            bg={bg}
            borderWidth={bw}
            borderColor={Warna.primary}
            borderRadius={10}
            padding={2}
            mr={Bmr}
            my={2}
            mb={mb}
            shadow={shadow}
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

export default CardPromo;

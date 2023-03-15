import {
  Box,
  Button,
  Center,
  HStack,
  Image,
  NativeBaseProvider,
  ScrollView,
  Text,
} from "native-base";
import Promo from "../../Data/Promo";
import { Warna } from "../../Style/index";

const CardPromo = () => {
  return (
    <NativeBaseProvider>
      <ScrollView
        horizontal={true}
        px={5}
        showsHorizontalScrollIndicator={false}
      >
        <HStack space={3} mr={10}>
          {Promo.map((Promo) => (
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
        </HStack>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default CardPromo;

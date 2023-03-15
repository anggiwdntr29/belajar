import {
  Box,
  Center,
  HStack,
  Image,
  NativeBaseProvider,
  ScrollView,
  Text,
} from "native-base";
import Artikel from "../../Data/Artikel";
import { Warna } from "../../Style/index";

const CardArtikel = () => {
  return (
    <NativeBaseProvider>
      <ScrollView
        horizontal={true}
        px={5}
        showsHorizontalScrollIndicator={false}
      >
        <HStack space={3} mr={10}>
          {Artikel.map((Artikel) => (
            <Box
              key={Artikel.id}
              w={"160px"}
              bg={Warna.primary}
              borderRadius={10}
              padding={2}
            >
              <Center>
                <Image
                  source={{ uri: `${Artikel.image}` }}
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
                color={Warna.putih}
              >
                {Artikel.title}
              </Text>
              <Text fontSize={"sm"} fontWeight={"light"} color={Warna.putih}>
                {Artikel.date}
              </Text>
            </Box>
          ))}
        </HStack>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default CardArtikel;

import {
  Box,
  Center,
  Flex,
  HStack,
  Image,
  NativeBaseProvider,
  ScrollView,
  Text,
} from "native-base";
import Artikel from "../../Data/Artikel";
import { Warna } from "../../Style/index";

const CardArtikel = ({ flexDirection }) => {
  return (
    <NativeBaseProvider>
      <Flex flexDirection={flexDirection} mr={8}>
        {Artikel.map((Artikel) => (
          <Box
            key={Artikel.id}
            w={"160px"}
            bg={Warna.putih}
            borderRadius={10}
            padding={2}
            mr={2}
            shadow={1}
            my={2}
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
              color={Warna.biru}
            >
              {Artikel.title}
            </Text>
            <Text fontSize={"sm"} fontWeight={"light"} color={Warna.biru}>
              {Artikel.date}
            </Text>
          </Box>
        ))}
      </Flex>
    </NativeBaseProvider>
  );
};

export default CardArtikel;

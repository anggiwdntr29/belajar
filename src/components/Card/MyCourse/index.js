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
import MyCourse from "../../Data/MyCourse";
import { Warna } from "../../Style/index";
const CardMyCourse = ({ flexDirection }) => {
  return (
    <NativeBaseProvider>
      <Flex flexDirection={flexDirection} mr={8}>
        {MyCourse.map((MyCourse) => (
          <Box
            key={MyCourse.id}
            w={"160px"}
            bg={Warna.putih}
            borderRadius={10}
            padding={2}
            mr={2}
            my={2}
            shadow={2}
          >
            <Center>
              <Image
                source={{ uri: `${MyCourse.image}` }}
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
              {MyCourse.title}
            </Text>
            <Text fontSize={"sm"} fontWeight={"light"} color={Warna.biru}>
              {MyCourse.exp}
            </Text>
          </Box>
        ))}
      </Flex>
    </NativeBaseProvider>
  );
};

export default CardMyCourse;

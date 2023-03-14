import {
  Box,
  Center,
  HStack,
  Image,
  NativeBaseProvider,
  ScrollView,
  Text,
} from "native-base";
import MyCourse from "../../Data/MyCourse";
import { Warna } from "../../Style/index";
const CardMyCourse = () => {
  return (
    <NativeBaseProvider>
      <ScrollView
        horizontal={true}
        px={5}
        showsHorizontalScrollIndicator={false}
      >
        <HStack space={3} mr={10}>
          {MyCourse.map((MyCourse) => (
            <Box
              key={MyCourse.id}
              w={"160px"}
              bg={Warna.primary}
              borderRadius={10}
              padding={2}
            >
              <Center>
                <Image
                  source={{ uri: `${MyCourse.image}` }}
                  alt={"img"}
                  w={"160px"}
                  h={"120px"}
                  borderRadius={10}
                />
              </Center>
              <Text
                mt={2}
                h={"48px"}
                fontSize={"sm"}
                fontWeight={"semibold"}
                textAlign={"justify"}
                color={Warna.putih}
              >
                {MyCourse.title}
              </Text>
              <Text fontSize={"sm"} fontWeight={"light"} color={Warna.putih}>
                {MyCourse.exp}
              </Text>
            </Box>
          ))}
        </HStack>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default CardMyCourse;

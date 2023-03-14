import { Box, HStack, Image, NativeBaseProvider, Text } from "native-base";
import MyCourse from "../../Data/MyCourse";
const CardMyCourse = () => {
  return (
    <NativeBaseProvider>
      <HStack>
        {MyCourse.map((MyCourse) => (
          <Box key={MyCourse.id}>
            <Image
              source={{ uri: `${MyCourse.image}` }}
              alt={"img"}
              w={"100px"}
              h={"100px"}
            />
            <Text>{MyCourse.title}</Text>
            <Text>{MyCourse.exp}</Text>
          </Box>
        ))}
      </HStack>
    </NativeBaseProvider>
  );
};

export default CardMyCourse;

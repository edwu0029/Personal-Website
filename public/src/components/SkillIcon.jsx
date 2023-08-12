import { Center, VStack, Image, Text } from "@chakra-ui/react";

const SkillIcon = (props) => {
  return (
    <VStack bg="whiteAlpha.200" borderRadius="xl" p="8px" gap="0">
      <Center bg="white" w="56px" h="56px" p="8px" borderRadius="full">
        <Image maxW="40px" maxH="40px" src={props.skillSrc}></Image>
      </Center>
      <Text fontSize="md" textAlign="center">
        {props.skillName}
      </Text>
    </VStack>
  );
};
export default SkillIcon;

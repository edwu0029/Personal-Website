import { Center, VStack, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const SkillIcon = (props) => {
  const variants = {
    intial: {
      scale: 1,
      transition: { duration: 0.2 },
    },
    hover: {
      y: "-0.3rem",
      transition: {
        duration: 0.2,
        type: "spring",
        stiffness: 400,
        damping: 15,
      },
    },
  };
  return (
    <VStack
      as={motion.div}
      initial={false}
      variants={variants}
      whileHover="hover"
      bg="whiteAlpha.300"
      borderRadius="xl"
      p="8px"
      gap="0"
    >
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

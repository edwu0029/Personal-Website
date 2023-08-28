import { Center, VStack, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const SkillIcon = (props) => {
  const variants = {
    initial: {
      x: "-100%",
      y: 0,
      opacity: "0%",
    },
    show: {
      x: 0,
      opacity: "100%",
      transition: { duration: 0.2, delay: 0.2 * props.idx, ease: "easeOut" },
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
      variants={variants}
      initial="initial"
      whileInView="show"
      viewport={{ once: true }}
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

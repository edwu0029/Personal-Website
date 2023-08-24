import {
  Container,
  Text,
  Heading,
  Link,
  Flex,
  Image,
  HStack,
} from "@chakra-ui/react";
import * as Consts from "../constants.js";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
const Education = (props) => {
  return (
    <Container
      as={motion.section}
      p="20px"
      maxW={{ base: "container.lg", "2xl": "container.xl" }}
      mb="100px"
    >
      <Text sx={Consts.captionStyle}>ALWAYS LEARNING</Text>
      <Heading as="h2" size="3xl" mb="20px" sx={Consts.headingStyle}>
        Education
      </Heading>
      <Heading as="h3" color="orange.400" size="lg" fontWeight="bold">
        Unviersity of Toronto
      </Heading>
      <Link
        color="orange.400"
        fontSize="xl"
        href="https://discover.engineering.utoronto.ca/programs/engineering-programs/electrical-computer-engineering/"
        isExternal
      >
        <Flex alignItems="center" gap="4px">
          Bachelor of Applied Science &bull; Computer Engineering
          <FiExternalLink />
        </Flex>
      </Link>
      <Text sx={Consts.bodyTextStyle} mb="20px">
        Sept 2022 - Apr 2026 (Expected)
      </Text>
      <Text sx={Consts.bodyTextStyle}>
        Computer Engineering is a program that combines electrical engineering
        and programming principles, offering a comprehensive curriculum in
        hardware and software. Additionally to build a well-rounded skillset, I
        am pursuing a minor in Artifical Intelligence and a certificate in
        Engineering Business.
      </Text>
      <HStack mt="20px" sx={Consts.bodyTextStyle}>
        <Text>Activities and Extracurriculars: </Text>
        <Link color="yellow.200" href="https://spark.skule.ca/" isExternal>
          <Flex as="span" alignItems="center" gap="4px">
            SPARK Design Club
            <FiExternalLink />
          </Flex>
        </Link>
        <Text>,</Text>
        <Link color="blue.200" href="https://utmist.gitlab.io/" isExternal>
          <Flex as="span" alignItems="center" gap="4px">
            UTMIST
            <FiExternalLink />
          </Flex>
        </Link>
      </HStack>
      <Flex mt="40px" mx="60px" justifyContent="space-around">
        <Image h="100px" src="./src/assets/uoft_logo.png" />
        <Image h="100px" borderRadius="xl" src="./src/assets/uoft_ece.jpg" />
        <Image h="100px" src="./src/assets/skule.png" />
        <Image h="100px" src="./src/assets/spark_design_club.png" />
        <Image
          h="100px"
          bg="white"
          p="8px"
          borderRadius="xl"
          src="./src/assets/utmist.svg"
        />
      </Flex>
    </Container>
  );
};
export default Education;

import {
  Box,
  Container,
  Text,
  Heading,
  Link,
  Flex,
  Image,
  HStack,
} from "@chakra-ui/react";
import * as Consts from "../constants.js";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/animations.js";
const Education = (props) => {
  return (
    <Container
      as={motion.section}
      p="20px"
      pt="80px"
      maxW={{
        base: "100%",
        md: "container.sm",
        lg: "container.md",
        xl: "container.lg",
        "2xl": "container.xl",
      }}
      mb="100px"
      id="education"
    >
      <Box
        as={motion.div}
        variants={fadeIn("down")}
        initial="initial"
        whileInView="show"
        viewport={{ once: true }}
        textAlign={{ base: "center", sm: "left" }}
        mb="20px"
      >
        <Text sx={Consts.captionStyle}>ALWAYS LEARNING</Text>
        <Heading as="h2" size="3xl" sx={Consts.headingStyle}>
          Education
        </Heading>
      </Box>
      <Box
        as={motion.div}
        variants={fadeIn("up")}
        initial="initial"
        whileInView="show"
        viewport={{ once: true }}
      >
        <Heading as="h3" color="orange.400" size="lg" fontWeight="bold">
          Unviersity of Toronto
        </Heading>
        <Link
          color="orange.400"
          fontSize="xl"
          href="https://discover.engineering.utoronto.ca/programs/engineering-programs/electrical-computer-engineering/"
          isExternal
        >
          Bachelor of Applied Science &bull; Computer Engineering
          <ExternalLinkIcon ml="4px" />
        </Link>
        <Text sx={Consts.bodyTextStyle} mb="20px">
          Sept 2022 - Apr 2026 (Expected)
        </Text>
        <Text sx={Consts.bodyTextStyle}>
          Computer Engineering is a program that combines electrical engineering
          and programming principles, offering a comprehensive curriculum in
          hardware and software. Additionally to build a well-rounded skillset,
          I am pursuing a minor in Artifical Intelligence and a certificate in
          Engineering Business.
        </Text>
        <Text mt="20px" sx={Consts.bodyTextStyle}>
          Activities and Extracurriculars:{" "}
          <Link color="yellow.200" href="https://spark.skule.ca/" isExternal>
            SPARK Design Club
            <ExternalLinkIcon ml="4px" />
          </Link>
          ,{" "}
          <Link color="blue.200" href="https://utmist.gitlab.io/" isExternal>
            UTMIST
            <ExternalLinkIcon ml="4px" />
          </Link>
        </Text>
      </Box>
      <Flex
        mt="40px"
        mx="60px"
        gap="4"
        justifyContent="space-around"
        wrap="wrap"
      >
        <Image h="6rem" src="./src/assets/uoft_logo.png" />
        <Image h="6rem" borderRadius="xl" src="./src/assets/uoft_ece.jpg" />
        <Image h="6rem" src="./src/assets/skule.png" />
        <Image h="6rem" src="./src/assets/spark_design_club.png" />
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

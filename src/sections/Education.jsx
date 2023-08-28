import {
  Box,
  Container,
  Text,
  Heading,
  Link,
  Flex,
  Image,
} from "@chakra-ui/react";
import * as Consts from "../data/constants.js";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/animations.js";
const Education = (props) => {
  const educationData = props.data.education;
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
      mb="10vh"
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
          href={educationData.urls.ece}
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
          hardware and software. Additionally, I am pursuing a minor in
          Artificial Intelligence and a certificate in Engineering Business to
          build a well-rounded skillset.
        </Text>
        <Text mt="20px" sx={Consts.bodyTextStyle}>
          Activities and Extracurriculars:{" "}
          <Link color="yellow.200" href={educationData.urls.spark} isExternal>
            SPARK Design Club
            <ExternalLinkIcon ml="4px" />
          </Link>
          ,{" "}
          <Link color="blue.200" href={educationData.urls.utmist} isExternal>
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
        <Image h="6rem" borderRadius="xl" src="/assets/clubs/uoft.png" />
        <Image h="6rem" borderRadius="xl" src="/assets/clubs/ece.jpg" />
        <Image h="6rem" borderRadius="xl" src="/assets/clubs/skule.png" />
        <Image h="6rem" borderRadius="xl" src="/assets/clubs/spark.png" />
        <Image h="100px" borderRadius="xl" src="/assets/clubs/utmist.png" />
      </Flex>
    </Container>
  );
};
export default Education;

import { Container, Text, Heading, Link, Flex, Image } from "@chakra-ui/react";
import * as Consts from "../constants.js";
import { ExternalLinkIcon } from "@chakra-ui/icons";
const Education = (props) => {
  return (
    <Container
      as="section"
      p="20px"
      mb="100px"
      maxW={{ base: "container.lg", "2xl": "container.xl" }}
    >
      <Text sx={Consts.captionStyle}>ALWAYS LEARNING</Text>
      <Heading as="h2" size="3xl" mb="20px" sx={Consts.headingStyle}>
        Education
      </Heading>
      <Heading as="h3" color="orange.400" size="xl" fontWeight="bold">
        Unviersity of Toronto
      </Heading>
      <Link
        color="orange.400"
        fontSize="xl"
        href="https://discover.engineering.utoronto.ca/programs/engineering-programs/electrical-computer-engineering/"
      >
        Bachelor of Applied Science &bull; Computer Engineering
        <ExternalLinkIcon mx="2px" mb="4px" />
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
      <Text mt="20px" sx={Consts.bodyTextStyle}>
        Activities and Extracurriculars:{" "}
        <Link color="yellow.200" href="https://spark.skule.ca/" isExternal>
          SPARK Design Club
          <ExternalLinkIcon mx="2px" mb="4px" />
        </Link>
        ,{" "}
        <Link color="blue.200" href="https://utmist.gitlab.io/" isExternal>
          UTMIST
          <ExternalLinkIcon mx="2px" mb="4px" />
        </Link>
      </Text>
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

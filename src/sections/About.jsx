import {
  Container,
  Heading,
  Text,
  Image,
  Flex,
  Box,
  Button,
  Link,
} from "@chakra-ui/react";
import * as Consts from "../data/constants.js";
import SkillDisplay from "../components/SkillsDisplay.jsx";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/animations.js";
import { AttachmentIcon } from "@chakra-ui/icons";
import { FaGithub } from "react-icons/fa";
import { forwardRef } from "react";

const About = forwardRef(function About(props, ref) {
  const data = props.data;
  const aboutData = props.data.about;
  const variants = {
    initial: {
      scale: 1,
      boxShadow: "0 0 15px #63B3ED",
      transition: { duration: 0.7 },
    },
    hover: { boxShadow: "0 0 30px #ED8936", transition: { duration: 0.7 } },
  };
  return (
    <Container
      ref={ref}
      as={motion.section}
      p="20px"
      pt="80px"
      pb="10vh"
      maxW={{
        base: "100%",
        md: "container.sm",
        lg: "container.md",
        xl: "container.lg",
        "2xl": "container.xl",
      }}
      id="about"
    >
      <Heading
        as={motion.h2}
        variants={fadeIn("down")}
        initial="initial"
        whileInView="show"
        viewport={{ once: true }}
        size="3xl"
        mb="20px"
        sx={Consts.headingStyle}
        textAlign={{ base: "center", sm: "left" }}
      >
        About Me
      </Heading>
      <Flex
        as={motion.div}
        variants={fadeIn("up")}
        initial="initial"
        whileInView="show"
        viewport={{ once: true }}
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-around"
        alignItems="center"
        mt="40px"
        mb="60px"
      >
        <Image
          as={motion.img}
          variants={variants}
          initial="initial"
          whileHover="hover"
          boxSize={{ base: "250px", md: "250px", lg: "300px" }}
          borderRadius="full"
          m={{ base: "0 0 30px 0", md: "0 36px 0 0 " }}
          src={aboutData.about_photo.file}
        />
        <Box>
          <Text sx={Consts.bodyTextStyle} mb="20px">
            Hello! My name is{" "}
            <Text as="b" color="blue.300">
              Edward Wu
            </Text>
            , a second-year computer engineering student at the University of
            Toronto based in Toronto, ON. Whether it's tinkering with circuits
            or coding prototype apps, I'm always passionately building new
            things and learning along the way! As a Computer Engineer, my
            interests lie in both software and hardware:
          </Text>
          <Text>
            <Text as="b" fontSize="lg" color="blue.300" opacity="100%">
              On the Software Side:{" "}
            </Text>
            <Text as="span" sx={Consts.bodyTextStyle}>
              Artificial Intelligence, Full-Stack development, System Software,
              and Firmware
            </Text>
          </Text>
          <Text mt="12px">
            <Text as="b" fontSize="lg" color="blue.300" opacity="100%">
              On the Hardware Side:{" "}
            </Text>
            <Text as="span" sx={Consts.bodyTextStyle}>
              Computer Architecture and Embedded Systems
            </Text>
          </Text>
          <Text mt="12px">
            <Text as="b" fontSize="lg" color="orange.400" opacity="100%">
              Hobbies:{" "}
            </Text>
            <Text as="span" sx={Consts.bodyTextStyle}>
              Basketball, MMA, Hiking, and Coding
            </Text>
          </Text>
          <Flex flexDirection="row" gap="5">
            <Link
              as="a"
              mt="20px"
              w="50%"
              maxW="200px"
              href={data.urls.resume}
              isExternal
            >
              <Button
                colorScheme="blue"
                w="100%"
                variant="solid"
                leftIcon={<AttachmentIcon />}
              >
                Resumé
              </Button>
            </Link>
            <Link
              as="a"
              mt="20px"
              w="50%"
              maxW="200px"
              href={data.urls.github}
              isExternal
            >
              <Button
                colorScheme="blue"
                w="100%"
                variant="outline"
                leftIcon={<FaGithub />}
              >
                Github
              </Button>
            </Link>
          </Flex>
        </Box>
      </Flex>
      <Heading
        as="h3"
        size="lg"
        textAlign={{ base: "center", sm: "left" }}
        mt="28px"
        mb="20px"
      >
        Programming Languages
      </Heading>
      <SkillDisplay skills={aboutData.skills.languages} />
      <Heading
        as="h3"
        size="lg"
        textAlign={{ base: "center", sm: "left" }}
        mt="20px"
        mb="20px"
      >
        Tech & Frameworks
      </Heading>
      <SkillDisplay skills={aboutData.skills.tech} />
      <Heading
        as="h3"
        size="lg"
        textAlign={{ base: "center", sm: "left" }}
        mt="20px"
        mb="20px"
      >
        Tools
      </Heading>
      <SkillDisplay skills={aboutData.skills.tools} />
    </Container>
  );
});
export default About;

import { Container, Heading, Text, Image, Flex, Box } from "@chakra-ui/react";
import * as Consts from "../constants.js";
import SkillDisplay from "../components/SkillsDisplay.jsx";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/animations.js";

const langauges = [
  { name: "C", src: "./src/assets/skill-icons/languages/c_logo.png" },
  { name: "C++", src: "./src/assets/skill-icons/languages/cpp_logo.png" },
  { name: "Java", src: "./src/assets/skill-icons/languages/java_logo.png" },
  { name: "Python", src: "./src/assets/skill-icons/languages/python_logo.png" },
  { name: "JavaScript", src: "./src/assets/skill-icons/languages/js_logo.png" },
  { name: "HTML", src: "./src/assets/skill-icons/languages/html_logo.png" },
  { name: "CSS", src: "./src/assets/skill-icons/languages/css_logo.png" },
];

const tech = [
  { name: "React", src: "./src/assets/skill-icons/tech/react_logo.png" },
  { name: "NodeJS", src: "./src/assets/skill-icons/tech/nodejs_logo.png" },
  { name: "NextJS", src: "./src/assets/skill-icons/tech/nextjs_logo.svg" },
  { name: "Tailwind", src: "./src/assets/skill-icons/tech/tailwind_logo.png" },
  { name: "Django", src: "./src/assets/skill-icons/tech/django_logo.svg" },
  { name: "Flask", src: "./src/assets/skill-icons/tech/flask_logo.svg" },
  {
    name: "MongoDB",
    src: "./src/assets/skill-icons/tech/mongodb_logo.png",
  },
  { name: "SQL", src: "./src/assets/skill-icons/tech/sql_logo.png" },
];

const tools = [
  { name: "Linux", src: "./src/assets/skill-icons/tools/linux_logo.png" },
  { name: "Git", src: "./src/assets/skill-icons/tools/git_logo.png" },
  { name: "Docker", src: "./src/assets/skill-icons/tools/docker_logo.png" },
  {
    name: "Fusion360",
    src: "./src/assets/skill-icons/tools/fusion360_logo.png",
  },
];

const About = (props) => {
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
      as={motion.section}
      p="20px"
      pt="60px"
      maxW={{ base: "container.lg", "2xl": "container.xl" }}
      mb="100px"
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
      >
        About Me
      </Heading>
      <Flex
        as={motion.div}
        variants={fadeIn("up")}
        initial="initial"
        whileInView="show"
        viewport={{ once: true }}
        justifyContent="space-around"
        align="center"
        mt="40px"
        mb="60px"
      >
        <Image
          as={motion.img}
          variants={variants}
          initial="initial"
          whileHover="hover"
          boxSize="300px"
          borderRadius="full"
          mr="36px"
          src="./src/assets/photo.png"
        />
        <Box>
          <Text sx={Consts.bodyTextStyle} mb="20px">
            Hello! My name is{" "}
            <Text as="b" color="blue.300">
              Edward Wu
            </Text>
            , a second year Computer Engineering student at the University of
            Toronto, based out of Toronto, ON. Whether it's tinkering with
            circuits or coding prototype apps, I'm always passionately building
            new things and learning along the way!
          </Text>
          <Text>
            <Text as="b" fontSize="lg" color="blue.300" opacity="100%">
              Interested In:{" "}
            </Text>
            <Text as="span" sx={Consts.bodyTextStyle}>
              Full-Stack Development, Artifical Intelligence, Computer
              Architecture, and System Software
            </Text>
          </Text>
          <Text>
            <Text as="b" fontSize="lg" color="orange.400" opacity="100%">
              Hobbies:{" "}
            </Text>
            <Text as="span" sx={Consts.bodyTextStyle}>
              Basketball, Gaming, Hiking, Coding
            </Text>
          </Text>
        </Box>
      </Flex>
      <Heading as="h3" size="lg" mt="28px" mb="20px">
        Programming Languages
      </Heading>
      <SkillDisplay skills={langauges} />
      <Heading as="h3" size="lg" mt="20px" mb="20px">
        Tech & Frameworks
      </Heading>
      <SkillDisplay skills={tech} />
      <Heading as="h3" size="lg" mt="20px" mb="20px">
        Tools
      </Heading>
      <SkillDisplay skills={tools} />
    </Container>
  );
};
export default About;

import { Container, Heading, Text } from "@chakra-ui/react";
import * as Consts from "../constants.js";
import SkillDisplay from "../components/SkillsDisplay.jsx";

const langauges = [
  { name: "C", src: "./src/assets/skill-icons/languages/c_logo.png" },
  { name: "C++", src: "./src/assets/skill-icons/languages/cpp_logo.png" },
  { name: "Java", src: "./src/assets/skill-icons/languages/java_logo.png" },
  { name: "Python", src: "./src/assets/skill-icons/languages/python_logo.png" },
  { name: "JavaScript", src: "./src/assets/skill-icons/languages/js_logo.png" },
  { name: "HTML", src: "./src/assets/skill-icons/languages/html_logo.png" },
  { name: "CSS", src: "./src/assets/skill-icons/languages/css_logo.png" },
  {
    name: "MongoDB",
    src: "./src/assets/skill-icons/languages/mongodb_logo.png",
  },
  { name: "SQL", src: "./src/assets/skill-icons/languages/sql_logo.png" },
];

const tech = [
  { name: "React", src: "./src/assets/skill-icons/tech/react_logo.png" },
  { name: "NodeJS", src: "./src/assets/skill-icons/tech/nodejs_logo.png" },
  { name: "NextJS", src: "./src/assets/skill-icons/tech/nextjs_logo.svg" },
  { name: "Tailwind", src: "./src/assets/skill-icons/tech/tailwind_logo.png" },
  { name: "Django", src: "./src/assets/skill-icons/tech/django_logo.svg" },
  { name: "Flask", src: "./src/assets/skill-icons/tech/flask_logo.svg" },
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
  return (
    <Container
      as="section"
      p="20px"
      mb="100px"
      maxW={{ base: "container.lg", "2xl": "container.xl" }}
    >
      <Heading as="h2" size="4xl" mb="20px" sx={Consts.headingStyle}>
        About Me
      </Heading>
      <Text sx={Consts.bodyTextStyle}>
        Hello! My name is Edward Wu, a second year Computer Engineering student
        at the University of Toronto, based in Toronto, ON.
      </Text>
      <Text sx={Consts.bodyTextStyle}>
        Intersted in Full-Stack Development, Artifical Intelligence, and
        Computer Architecture.
      </Text>
      <Heading as="h3" size="lg" mt="36px" mb="20px">
        Programming Languages
      </Heading>
      <SkillDisplay skills={langauges} />
      <Heading as="h3" size="lg" mb="20px" mt="36px">
        Tech & Frameworks
      </Heading>
      <SkillDisplay skills={tech} />
      <Heading as="h3" size="lg" mb="20px" mt="36px">
        Tools
      </Heading>
      <SkillDisplay skills={tools} />
    </Container>
  );
};
export default About;

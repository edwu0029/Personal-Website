import { Container, Heading, Text } from "@chakra-ui/react";
import * as Consts from "../constants.js";

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
    </Container>
  );
};
export default About;

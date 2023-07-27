import { Container, Heading, Text } from "@chakra-ui/react";
import ProjectDisplay from "../components/ProjectDisplay";

const Projects = (props) => {
  const captionStyle = { opacity: "85%", fontSize: "md", fontStyle: "italic" };
  const headingStyle = {
    textDecoration: "underline",
    textDecorationColor: "blue.500",
  };
  return (
    <Container
      as="section"
      p="20px"
      maxW={{ base: "container.lg", "2xl": "container.xl" }}
    >
      <Text sx={captionStyle}>IMPACTFUL, INNOVATIVE, CREATIVE</Text>
      <Heading as="h2" size="3xl" mb="20px" sx={headingStyle}>
        Projects
      </Heading>
      <Text opacity="85%" mb="40px" fontSize="md" lineHeight="tall">
        Discover a collection of my ongoing and completed projects that
        highlight my expertise, creativity, and dedication to continuous
        learning. From web applications to competitive programming, each project
        utilizes different problem-solving techniques and technologies to tackle
        unique challenges.
      </Text>
      <ProjectDisplay></ProjectDisplay>
    </Container>
  );
};
export default Projects;

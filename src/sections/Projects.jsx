import { Box, Container, Heading, Text } from "@chakra-ui/react";
import ProjectDisplay from "../components/ProjectDisplay";
import * as Consts from "../constants.js";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/animations";

const Projects = (props) => {
  return (
    <Container
      as={motion.section}
      p="20px"
      pt="60px"
      maxW={{ base: "container.lg", "2xl": "container.xl" }}
      id="projects"
    >
      <Box
        as={motion.div}
        variants={fadeIn("down")}
        initial="initial"
        whileInView="show"
        viewport={{ once: true }}
      >
        <Text sx={Consts.captionStyle}>IMPACTFUL, INNOVATIVE, CREATIVE</Text>
        <Heading as="h2" size="3xl" mb="20px" sx={Consts.headingStyle}>
          Projects
        </Heading>
      </Box>
      <Box
        as={motion.div}
        variants={fadeIn("up")}
        initial="initial"
        whileInView="show"
        viewport={{ once: true }}
      >
        <Text mb="32px" sx={Consts.bodyTextStyle}>
          Discover a collection of my ongoing and completed projects that
          highlight my expertise, creativity, and dedication to continuous
          learning. From web applications to competitive programming, each
          project utilizes different problem-solving techniques and technologies
          to tackle unique challenges.
        </Text>
        <ProjectDisplay />
      </Box>
    </Container>
  );
};
export default Projects;

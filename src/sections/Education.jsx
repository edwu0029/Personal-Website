import { Container, Text, Heading, Link, HStack } from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";
const Education = (props) => {
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
      bg="gray.50"
    >
      <Text sx={captionStyle}>ALWAYS LEARNING</Text>
      <Heading as="h2" size="3xl" mb="20px" sx={headingStyle}>
        Education
      </Heading>
      <Text color="teal.500" fontSize="2xl" fontWeight="bold">
        Unviersity of Toronto
      </Text>
      <Link
        href="https://discover.engineering.utoronto.ca/programs/engineering-programs/electrical-computer-engineering/"
        isExternal
      >
        Bachelor of Applied Science, Computer Engineering
        <FiExternalLink mx="2px" />
      </Link>
    </Container>
  );
};
export default Education;

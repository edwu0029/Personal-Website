import { Container, Text, Heading, Link, Icon } from "@chakra-ui/react";
import { BiLinkExternal } from "react-icons/bi";
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
    >
      <Text sx={captionStyle}>ALWAYS LEARNING</Text>
      <Heading as="h2" size="3xl" mb="20px" sx={headingStyle}>
        Education
      </Heading>
      <Heading as="h3" color="orange.500" size="xl" fontWeight="bold">
        Unviersity of Toronto
      </Heading>
      <Link
        color="orange.500"
        href="https://discover.engineering.utoronto.ca/programs/engineering-programs/electrical-computer-engineering/"
        display="inline"
      >
        Bachelor of Applied Science, Computer Engineering
        <Icon as={BiLinkExternal} mt="8px" />
      </Link>
    </Container>
  );
};
export default Education;

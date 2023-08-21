import { Container, Heading, Text } from "@chakra-ui/react";
const Home = (props) => {
  return (
    <Container
      as="section"
      p="20px"
      mb="500px"
      mt="100px"
      maxW={{ base: "container.lg", "2xl": "container.xl" }}
    >
      <Text fontSize="3xl" opacity="85%">
        Hello! My name is
      </Text>
      <Heading as="h1" fontSize="96px" color="blue.300">
        Edward Wu
      </Heading>
      <Text as="span" fontSize="3xl" opacity="100%" fontWeight="bold">
        Software Engineer
      </Text>
    </Container>
  );
};
export default Home;

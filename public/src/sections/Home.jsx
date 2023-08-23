import {
  Container,
  Heading,
  Text,
  Flex,
  IconButton,
  Box,
} from "@chakra-ui/react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Home = (props) => {
  return (
    <Container
      as="section"
      px="20px"
      pt="20vh"
      maxW={{ base: "container.lg", "2xl": "container.xl" }}
      h="100vh"
    >
      <Flex>
        <Box mr="20px">
          <Box
            as="div"
            w="15px"
            h="275px"
            bg="linear-gradient(180deg, #4299E1 0%, #0B1117 110%)"
          />
        </Box>
        <Box>
          <Text fontSize="3xl" letterSpacing="wide">
            Hi there! I'm
          </Text>
          <Heading as="h1" fontSize="96px" lineHeight="shorter">
            <Text as="span" color="blue.400">
              Edward
            </Text>{" "}
            Wu
          </Heading>
          <Text as="span" fontSize="3xl" mt="40px" letterSpacing="wide">
            Software Engineer
          </Text>
          <Flex mt="12px" gap="3">
            <IconButton
              borderRadius="full"
              bg="whiteAlpha.300"
              icon={<FaLinkedinIn size="20" />}
            />
            <IconButton
              borderRadius="full"
              bg="whiteAlpha.300"
              icon={<FaGithub size="20" />}
            />
            <IconButton
              borderRadius="full"
              bg="whiteAlpha.300"
              icon={<MdEmail size="20" />}
            />
            <IconButton
              borderRadius="full"
              bg="whiteAlpha.300"
              icon={<FaFilePdf size="20" />}
            />
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};
export default Home;

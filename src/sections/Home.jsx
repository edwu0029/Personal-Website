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
import { motion } from "framer-motion";
import { fadeIn } from "../utils/animations";
const Home = (props) => {
  const lineAnimate = {
    initial: {
      x: "-200%",
      opacity: "0%",
    },
    show: {
      x: 0,
      opacity: "100%",
      transition: { duration: 2, ease: "easeInOut" },
    },
  };
  return (
    <Container
      as={motion.section}
      p="20px"
      maxW={{ base: "container.lg", "2xl": "container.xl" }}
      px="20px"
      pt="30vh"
      h="100vh"
      maxH="container.2xl"
      id="home"
    >
      <Flex>
        <Box mr="20px">
          <Box
            as={motion.div}
            variants={lineAnimate}
            initial="initial"
            animate="show"
            w="15px"
            h="275px"
            bg="linear-gradient(180deg, #4299E1 0%, #0B1117 110%)"
          />
        </Box>
        <Box
          as={motion.div}
          variants={fadeIn("down")}
          initial="initial"
          animate="show"
        >
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

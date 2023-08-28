import {
  Container,
  Heading,
  Text,
  Flex,
  IconButton,
  Box,
  Link,
} from "@chakra-ui/react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { EmailIcon, AttachmentIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/animations";
const Home = (props) => {
  const data = props.data;
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
      maxW={{
        base: "100%",
        md: "container.sm",
        lg: "container.md",
        xl: "container.lg",
        "2xl": "container.xl",
      }}
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
            h="100%"
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
          <Heading
            as="h1"
            fontSize={{ base: "72px", md: "96px" }}
            lineHeight="shorter"
          >
            <Text as="span" color="blue.400">
              Edward
            </Text>{" "}
            Wu
          </Heading>
          <Text
            as="span"
            fontSize="3xl"
            mt="40px"
            h="40px"
            letterSpacing="wide"
          >
            Software Engineer
          </Text>
          <Flex mt="12px" gap="3">
            <Link href={data.urls.linkedin} isExternal>
              <IconButton
                as="div"
                borderRadius="full"
                bg="whiteAlpha.300"
                icon={<FaLinkedinIn size="20" />}
              />
            </Link>
            <Link href={data.urls.github} isExternal>
              <IconButton
                as="div"
                borderRadius="full"
                bg="whiteAlpha.300"
                icon={<FaGithub size="20" />}
              />
            </Link>
            <Link href={`mailto:${data.urls.email}`} isExternal>
              <IconButton
                as="div"
                borderRadius="full"
                bg="whiteAlpha.300"
                icon={<EmailIcon size="20" />}
              />
            </Link>
            <Link href={data.urls.resume} isExternal>
              <IconButton
                as="div"
                borderRadius="full"
                bg="whiteAlpha.300"
                icon={<AttachmentIcon size="20" />}
              />
            </Link>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};
export default Home;

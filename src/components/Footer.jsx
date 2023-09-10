import {
  Text,
  Container,
  Divider,
  Flex,
  IconButton,
  Link,
} from "@chakra-ui/react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { EmailIcon, AttachmentIcon } from "@chakra-ui/icons";

const Footer = () => {
  return (
    <Container
      as="footer"
      p="20px"
      bg="#0B1117"
      maxW={{
        base: "100%",
        md: "container.sm",
        lg: "container.md",
        xl: "container.lg",
        "2xl": "container.xl",
      }}
    >
      <Divider mb="20px" />
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        gap="5"
        align="center"
        justify="space-between"
      >
        <Link
          fontSize="2xl"
          fontWeight="bold"
          _hover={{ opacity: "100%" }}
          href="/#"
        >
          edwardwu.
        </Link>
        <Text fontSize="lg">Website by Edward Wu &#169; 2023</Text>
        <Flex gap="3">
          <Link href="https://www.linkedin.com/in/edwu0029/" isExternal>
            <IconButton
              as="div"
              borderRadius="full"
              bg="whiteAlpha.300"
              icon={<FaLinkedinIn size="20" />}
            />
          </Link>
          <Link href="https://github.com/edwu0029" isExternal>
            <IconButton
              as="div"
              borderRadius="full"
              bg="whiteAlpha.300"
              icon={<FaGithub size="20" />}
            />
          </Link>
          <Link href="mailto:edwardwu0029@gmail.com" isExternal>
            <IconButton
              as="div"
              borderRadius="full"
              bg="whiteAlpha.300"
              icon={<EmailIcon size="20" />}
            />
          </Link>
          <Link href="/data/resume.pdf" isExternal>
            <IconButton
              as="div"
              borderRadius="full"
              bg="whiteAlpha.300"
              icon={<AttachmentIcon size="20" />}
            />
          </Link>
        </Flex>
      </Flex>
    </Container>
  );
};
export default Footer;

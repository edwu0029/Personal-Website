import { Box, Flex, Link, HStack } from "@chakra-ui/react";
import { useRef } from "react";

const NavBar = () => {
  return (
    <Flex
      zIndex="docked"
      as="nav"
      position="fixed"
      w="100vw"
      flex="row"
      bg="#0B1117"
      justify="space-between"
      px={{ base: "50px", xl: "100px", "2xl": "200px" }}
      py="12px"
    >
      <Link
        fontSize="2xl"
        fontWeight="bold"
        _hover={{ opacity: "100%" }}
        href="/#home"
      >
        Edward Wu.
      </Link>
      <HStack gap={10}>
        <Link
          fontSize="xl"
          opacity="85%"
          fontWeight="500"
          _hover={{ opacity: "100%" }}
          href="/#about"
        >
          About
        </Link>
        <Link
          fontSize="xl"
          opacity="85%"
          fontWeight="500"
          _hover={{ opacity: "100%" }}
          href="/#education"
        >
          Education
        </Link>
        <Link
          fontSize="xl"
          opacity="85%"
          fontWeight="500"
          _hover={{ opacity: "100%" }}
          href="/#projects"
        >
          Projects
        </Link>
        <Link
          fontSize="xl"
          opacity="85%"
          fontWeight="500"
          _hover={{ opacity: "100%" }}
        >
          Contact
        </Link>
      </HStack>
    </Flex>
  );
};
export default NavBar;

import { Box, Flex, Link, HStack } from "@chakra-ui/react";

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
      <Link fontSize="2xl" fontWeight="bold" _hover={{ opacity: "100%" }}>
        Edward Wu.
      </Link>
      <HStack gap={10}>
        <Link
          fontSize="xl"
          opacity="85%"
          fontWeight="500"
          _hover={{ opacity: "100%", color: "blue.400" }}
        >
          About
        </Link>
        <Link
          fontSize="xl"
          opacity="85%"
          fontWeight="500"
          _hover={{ opacity: "100%" }}
        >
          Education
        </Link>
        <Link
          fontSize="xl"
          opacity="85%"
          fontWeight="500"
          _hover={{ opacity: "100%" }}
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

import { useState } from "react";
import {
  Box,
  Flex,
  Link,
  HStack,
  IconButton,
  VStack,
  Divider,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const NavBar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const handleHamburgerClick = () => {
    setHamburgerOpen((prev) => !prev);
  };
  return (
    <Box
      zIndex="docked"
      as="nav"
      position="fixed"
      w="100vw"
      bg="rgba(11, 17, 23, 0.87)"
    >
      <Flex
        flex="row"
        justify="space-between"
        align="center"
        px={{ base: "20px", md: "50px", xl: "70px", "2xl": "200px" }}
      >
        <Link
          fontSize={{ base: "lg", md: "2xl" }}
          fontWeight="bold"
          href="/#home"
          py="16px"
        >
          edwardwu.
        </Link>
        {/* For Desktop */}
        <HStack
          as="div"
          display={{ base: "none", sm: "flex" }}
          gap={{ base: 4, md: 10 }}
        >
          <Link
            fontSize={{ base: "lg", md: "xl" }}
            opacity="85%"
            fontWeight="500"
            _hover={{ opacity: "100%" }}
            href="/#about"
          >
            About
          </Link>
          <Link
            fontSize={{ base: "lg", md: "xl" }}
            opacity="85%"
            fontWeight="500"
            _hover={{ opacity: "100%" }}
            href="/#education"
          >
            Education
          </Link>
          <Link
            fontSize={{ base: "lg", md: "xl" }}
            opacity="85%"
            fontWeight="500"
            _hover={{ opacity: "100%" }}
            href="/#projects"
          >
            Projects
          </Link>
          <Link
            fontSize={{ base: "lg", md: "xl" }}
            opacity="85%"
            fontWeight="500"
            _hover={{ opacity: "100%" }}
            href="#contact"
          >
            Contact
          </Link>
        </HStack>
        {/* For Mobile */}
        <Box display={{ base: "block", sm: "none" }}>
          <IconButton
            icon={<HamburgerIcon boxSize="25px" />}
            onClick={handleHamburgerClick}
          />
        </Box>
      </Flex>
      {hamburgerOpen ? (
        <VStack centerContent py="20px">
          <Link
            fontSize={{ base: "lg", md: "xl" }}
            opacity="85%"
            fontWeight="500"
            _hover={{ opacity: "100%" }}
            onClick={handleHamburgerClick}
            href="/#about"
          >
            About
          </Link>
          <Link
            fontSize={{ base: "lg", md: "xl" }}
            opacity="85%"
            fontWeight="500"
            _hover={{ opacity: "100%" }}
            onClick={handleHamburgerClick}
            href="/#education"
          >
            Education
          </Link>
          <Link
            fontSize={{ base: "lg", md: "xl" }}
            opacity="85%"
            fontWeight="500"
            _hover={{ opacity: "100%" }}
            onClick={handleHamburgerClick}
            href="/#projects"
          >
            Projects
          </Link>
          <Link
            fontSize={{ base: "lg", md: "xl" }}
            opacity="85%"
            fontWeight="500"
            _hover={{ opacity: "100%" }}
            onClick={handleHamburgerClick}
            href="#contact"
          >
            Contact
          </Link>
          <Divider />
        </VStack>
      ) : (
        ""
      )}
    </Box>
  );
};
export default NavBar;

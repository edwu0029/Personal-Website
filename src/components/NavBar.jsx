import { useState, useEffect } from "react";
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

const NavBar = (props) => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const nearestSection = (pos, sectionRefs) => {
    //Check contact, the last section first due to its short length
    const contact = sectionRefs[sectionRefs.length - 1].sectionRef;
    if (
      pos + contact.current.clientHeight + 200 >=
      document.documentElement.scrollHeight
    ) {
      return "contact";
    }

    //Otherwise, check all sections
    for (let i = 0; i < sectionRefs.length; i++) {
      const ref = sectionRefs[i].sectionRef;
      if (
        sectionRefs[i].sectionRef.current.offsetTop - window.innerHeight / 8 <=
          pos &&
        pos <=
          sectionRefs[i].sectionRef.current.offsetTop +
            sectionRefs[i].sectionRef.current.clientHeight -
            window.innerHeight / 8
      ) {
        return sectionRefs[i].sectionName;
      }
    }
  };

  useEffect(() => {
    const handleScroll = (e) => {
      setActiveSection(
        nearestSection(window.scrollY, props.sectionRefGetter())
      );
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      backdropFilter="blur(20px)"
    >
      <Flex
        flex="row"
        justify="space-between"
        align="center"
        px={{ base: "10vw", md: "100px", xl: "120px", "2xl": "200px" }}
      >
        <Link
          fontSize={{ base: "lg", md: "2xl" }}
          fontWeight="bold"
          _hover={{ textDecoration: "none" }}
          href="/#"
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
            opacity={activeSection == "about" ? "100%" : "70%"}
            fontWeight="500"
            _hover={{ opacity: "100%" }}
            href="/#about"
          >
            About
          </Link>
          <Link
            fontSize={{ base: "lg", md: "xl" }}
            opacity={activeSection == "education" ? "100%" : "70%"}
            fontWeight="500"
            _hover={{ opacity: "100%" }}
            href="/#education"
          >
            Education
          </Link>
          <Link
            fontSize={{ base: "lg", md: "xl" }}
            opacity={activeSection == "projects" ? "100%" : "70%"}
            fontWeight="500"
            _hover={{ opacity: "100%" }}
            href="/#projects"
          >
            Projects
          </Link>
          <Link
            fontSize={{ base: "lg", md: "xl" }}
            opacity={activeSection == "contact" ? "100%" : "70%"}
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
        <VStack py="20px">
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

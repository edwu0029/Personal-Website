import { Box, Container, Heading, Text, Link, HStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import * as Consts from "../data/constants.js";
import { fadeIn } from "../utils/animations";
import { EmailIcon, CalendarIcon } from "@chakra-ui/icons";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { forwardRef } from "react";
const Contact = forwardRef(function Contact(props, ref) {
  const textStyle = { opacity: "85%", fontSize: "md" };
  const data = props.data;
  return (
    <Container
      ref={ref}
      as={motion.section}
      p="20px"
      pb="30vh"
      maxW={{
        base: "100%",
        md: "container.sm",
        lg: "container.md",
        xl: "container.lg",
        "2xl": "container.xl",
      }}
      textAlign={{ base: "center", sm: "left" }}
      id="contact"
    >
      <Box
        as={motion.div}
        variants={fadeIn("down")}
        initial="initial"
        whileInView="show"
        viewport={{ once: true }}
        textAlign={{ base: "center", sm: "left" }}
        mb="20px"
      >
        <Text sx={Consts.captionStyle}>LET'S CHAT</Text>
        <Heading as="h2" size="3xl" sx={Consts.headingStyle}>
          Contact
        </Heading>
      </Box>
      <Box
        as={motion.div}
        variants={fadeIn("up")}
        initial="initial"
        viewport={{ once: true }}
        whileInView="show"
        mt="20px"
      >
        <HStack>
          <HStack as="div" color="blue.200">
            <EmailIcon />
            <Text>Email:</Text>
          </HStack>
          <Text sx={textStyle}>edwardwu.wu [at] mail.utoronto.ca</Text>
        </HStack>
        <HStack>
          <HStack as="div" color="blue.200">
            <CalendarIcon />
            <Text>In-Person:</Text>
          </HStack>
          <Text sx={textStyle}>Greater Toronto Area</Text>
        </HStack>
        <HStack>
          <HStack as="div" color="blue.200">
            <FaLinkedinIn />
            <Text>LinkedIn:</Text>
          </HStack>
          <Link sx={textStyle} href={data.urls.linkedin} isExternal>
            Edward Wu
          </Link>
        </HStack>
        <HStack>
          <HStack as="div" color="blue.200">
            <FaInstagram />
            <Text>Instagram:</Text>
          </HStack>
          <Link sx={textStyle} href={data.urls.instagram} isExternal>
            @edwardwu.29
          </Link>
        </HStack>
      </Box>
    </Container>
  );
});
export default Contact;

import { Container, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import * as Consts from "../constants.js";
import { fadeIn } from "../utils/animations";
const Contact = () => {
  return (
    <Container
      as={motion.section}
      p="20px"
      pt="80px"
      maxW={{
        base: "100%",
        md: "container.sm",
        lg: "container.md",
        xl: "container.lg",
        "2xl": "container.xl",
      }}
      mb="100px"
      id="contact"
    >
      <Heading
        as={motion.h2}
        variants={fadeIn("down")}
        initial="initial"
        whileInView="show"
        viewport={{ once: true }}
        size="3xl"
        mb="20px"
        sx={Consts.headingStyle}
      >
        Contact
      </Heading>
    </Container>
  );
};
export default Contact;

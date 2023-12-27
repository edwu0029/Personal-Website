import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
const ScrollDownIcon = (props) => {
  const arrowStyles = {
    borderWidth: "5px",
    borderColor: "#4299E1",
    width: "30px",
    height: "30px",
    transform: "translate(-50%, -50%) rotate(45deg)",
    borderTop: "none",
    borderLeft: "none",
  };
  const scrollAnimate = {
    initial: {},
    show: {
      y: ["0px", "0px", "0px", "50px"],
      opacity: ["0%", "100%", "100%", "0%"],
      transition: {
        duration: 1.4,
        ease: "easeInOut",
        times: [0, 0.25, 0.3, 0.8],
        repeat: Infinity,
        repeatDelay: 0.1,
      },
    },
  };
  return (
    <Box
      as={motion.div}
      variants={scrollAnimate}
      initial="initial"
      animate="show"
    >
      <Box as={motion.div} sx={arrowStyles} />
      <Box as={motion.div} sx={arrowStyles} />
    </Box>
  );
};
export default ScrollDownIcon;

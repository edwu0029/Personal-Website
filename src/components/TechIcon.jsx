import { Box } from "@chakra-ui/react";

const TechIcon = (props) => {
  return (
    <Box
      lineHeight="short"
      px="2"
      py="1"
      bg="#0B1117"
      fontFamily="mono"
      borderRadius="lg"
    >
      {props.techName}
    </Box>
  );
};
export default TechIcon;

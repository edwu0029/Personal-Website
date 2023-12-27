import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import SkillIcon from "./SkillIcon";
const SkillDisplay = (props) => {
  return (
    <Flex
      as={motion.div}
      gap="8"
      px={{ base: "5%", sm: "0" }}
      justifyContent={{ base: "center", sm: "left" }}
      wrap="wrap"
    >
      {props.skills.map((s, idx) => (
        <SkillIcon
          skillName={s.name}
          skillSrc={s.file}
          key={s.name}
          idx={idx}
        />
      ))}
    </Flex>
  );
};
export default SkillDisplay;

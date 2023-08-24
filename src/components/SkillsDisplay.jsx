import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import SkillIcon from "./SkillIcon";
const SkillDisplay = (props) => {
  return (
    <Flex as={motion.div} gap="8" justifyContent="left">
      {props.skills.map((s) => (
        <SkillIcon skillName={s.name} skillSrc={s.src} key={s.name} />
      ))}
    </Flex>
  );
};
export default SkillDisplay;

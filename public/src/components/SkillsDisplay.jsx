import { Flex } from "@chakra-ui/react";
import SkillIcon from "./SkillIcon";

const SkillDisplay = (props) => {
  return (
    <Flex gap="8" justifyContent="left">
      {props.skills.map((s) => (
        <SkillIcon skillName={s.name} skillSrc={s.src} key={s.name} />
      ))}
    </Flex>
  );
};
export default SkillDisplay;

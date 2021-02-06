import { Skill } from "@entities/Skill";
import { AnimatePresence, motion } from "framer-motion";
import { PropsWithChildren, useState } from "react";
import Container from "./styles";
import SkillIcon from "@icons/skillicon.svg";

interface IProps {
  skill: Skill;
  unique?: boolean;
}

const SkillItem: React.FC<PropsWithChildren<IProps>> = props => {
  const { skill } = props;
  const [dropdown, setDropdown] = useState(false);
  return (
    <Container unique={props.unique} layout>
      {/* skillname */}
      <motion.div layout className="skill-header">
        <SkillIcon className="skill-icon"></SkillIcon>
        <h1 className="skill-name" onClick={() => setDropdown(!dropdown)}>
          {skill.name}
        </h1>
        {/* skilldescription */}
      </motion.div>
      <AnimatePresence>
        {(dropdown || props.unique) && (
          <motion.p
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              hidden: {
                opacity: 0,
              },
              visible: {
                x: 0,
                height: "100%",
                opacity: 1,
                transition: {
                  duration: 0.5,
                },
              },
              exit: {
                opacity: 0,
              },
            }}
            className="skill-description"
          >
            {skill.description}
          </motion.p>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default SkillItem;

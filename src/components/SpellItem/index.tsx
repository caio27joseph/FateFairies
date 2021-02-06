import { Spell } from "@entities/Skill";
import { AnimatePresence, motion } from "framer-motion";
import { PropsWithChildren, useState } from "react";
import Container from "./styles";
import SpellIcon from "@icons/spellicon.svg";

interface IProps {
  spell: Spell;
  unique?: boolean;
}

const SpellItem: React.FC<PropsWithChildren<IProps>> = props => {
  const { spell } = props;
  const [dropdown, setDropdown] = useState(false);
  return (
    <Container unique={props.unique} layout>
      {/* spellname */}
      <motion.div layout className="spell-header">
        <SpellIcon className="spell-icon"></SpellIcon>
        <h1 className="spell-name" onClick={() => setDropdown(!dropdown)}>
          {spell.name}
        </h1>
        {/* spelldescription */}
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
            className="spell-description"
          >
            {spell.description}
          </motion.p>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default SpellItem;

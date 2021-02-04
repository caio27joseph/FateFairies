import { motion } from "framer-motion";
import styled from "styled-components";
import SpellIcon from "@icons/spellicon.svg";

interface IProps {
  unique?: boolean;
}

const Container = styled(motion.div)<IProps>`
  font-size: 18px;
  width: min(100%, 600px);
  margin: auto;
  margin-top: 20px;
  .spell-header {
    display: flex;
    align-items: center;
  }
  .spell-icon {
    height: 30px;
    width: 45px;
    margin-right: 5px;
    fill: green;
  }
  .spell-name {
    display: inline;
    width: 100%;
    font-size: 1.3em;
    border-bottom: 1px solid ${props => props.theme.colors.primary};
    &:hover {
      font-size: ${props => (props.unique ? "1.3em" : "1.35em")};
      ${props => (props.unique ? "" : "cursor: pointer;")}
    }
  }
  .spell-description {
    font-size: 1em;
  }
`;

export default Container;

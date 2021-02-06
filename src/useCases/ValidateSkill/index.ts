import { ValidateSkillUseCase } from "./ValidateSkillUseCase";
import ValidatorJsSkillProvider from "@providers/ValidatorJsProvider/ValidatorJsSkillProvider";

const skillProvider = new ValidatorJsSkillProvider();
const validateSkillUseCase = new ValidateSkillUseCase(skillProvider);

export { validateSkillUseCase };

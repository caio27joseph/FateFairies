import { ValidateSpellUseCase } from "./ValidateSpellUseCase";
import ValidatorJsSpellProvider from "@providers/ValidatorJsProvider/ValidatorJsSpellProvider";

const spellProvider = new ValidatorJsSpellProvider();
const validateSpellUseCase = new ValidateSpellUseCase(spellProvider);

export { validateSpellUseCase };

import { ValidatorJsProvider } from "@providers/ValidatorJsProvider";
import { ValidateSpellUseCase } from "./ValidateSpellUseCase";

const validatorJsProvider = new ValidatorJsProvider();
const validateSpellUseCase = new ValidateSpellUseCase(validatorJsProvider);

export { validateSpellUseCase };

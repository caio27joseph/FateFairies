import validate from "validate.js";
import { IValidateSpellDTO } from "@useCases/ValidateSpell/IValidateSpellDTO";
import { ISpellProvider } from "~providers/ISpellProvider";

export default class ValidatorJsProvider implements ISpellProvider {
  validator = {
    name: {
      presence: { allowEmpty: false },
      type: "string",
    },
    description: {
      presence: { allowEmpty: false },
      type: "string",
    },
  };

  async validate(data: IValidateSpellDTO): Promise<any> {
    return validate(data, this.validator);
  }
}

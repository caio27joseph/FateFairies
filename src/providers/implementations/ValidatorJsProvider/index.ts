import { IValidateSpellDTO } from "@useCases/ValidateSpell/IValidateSpellDTO";
import { IValidateSpellProvider } from "../../IValidateSpellProvider";
import validate from "validate.js";
import SpellValidator from "./SpellValidator";

export class ValidatorJsProvider implements IValidateSpellProvider {
  async validateSpell(data: IValidateSpellDTO): Promise<any> {
    return validate(data, {
      name: {
        presence: { allowEmpty: false },
        type: "string",
      },
      description: {
        presence: { allowEmpty: false },
        type: "string",
      },
    });
  }
}

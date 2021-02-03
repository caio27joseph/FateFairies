import { destroySpellUseCase } from "@useCases/DestroySpell";
import { stringify } from "querystring";
import { createSpellUseCase } from ".";
import ICreateSpellDTO from "./ICreateSpellDTO";

export default describe("CreateSpellUseCase", () => {
  const spell: ICreateSpellDTO = {
    id: undefined,
    name: "Avada",
    description: "Kills the enemy",
  };
  it("should create a spell normally", async () => {
    await createSpellUseCase
      .execute(spell)
      .then(s => {
        const { name, description, id } = s;

        expect({ name, description, id }).toEqual(spell);
      })
      .catch(e => {
        fail(e.message);
      });
  });
  it("should throw 'Spell already exists' error", async () => {
    await createSpellUseCase
      .execute(spell)
      .then(spell => fail("Normal Spell Returned"))
      .catch(e => {
        expect(e.message).toEqual("Spell already exists");
      });
  });
  it("shoul be a invalid form spell", async () => {
    const spell: ICreateSpellDTO = {
      id: undefined,
      name: "",
      description: "Kills the enemy",
    };
    await createSpellUseCase
      .execute(spell)
      .then(spell => fail("Normal spell returned"))
      .catch(e => {
        expect(e.message).toEqual("Invalid Spell");
      });
  });
  it("shoul destroy a spell normally", async () => {
    await destroySpellUseCase.execute(spell);
  });
});

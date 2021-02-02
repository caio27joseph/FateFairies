import { stringify } from "querystring";
import { createSpellUseCase } from ".";
import ICreateSpellDTO from "./ICreateSpellDTO";

export default describe("CreateUserUseCase", () => {
  const spell: ICreateSpellDTO = {
    name: "Avada",
    description: "Kills the enemy",
  };
  it("should create a spell normally", async () => {
    await createSpellUseCase
      .execute(spell)
      .then(s => {
        const { name, description } = s;
        expect({ name, description }).toEqual(spell);
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
});

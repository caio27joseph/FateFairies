import { destroySkillUseCase } from "@useCases/DestroySkill";
import { stringify } from "querystring";
import { createSkillUseCase } from ".";
import ICreateSkillDTO from "./ICreateSkillDTO";

export default describe("CreateSkillUseCase", () => {
  const skill: ICreateSkillDTO = {
    id: undefined,
    name: "Avada",
    description: "Kills the enemy",
    createdAt: null,
    updatedAt: null,
  };
  it("should create a skill normally", async () => {
    await createSkillUseCase
      .execute(skill)
      .then(s => {
        const { name, description, id } = s;

        expect(name).toEqual("Avada");
      })
      .catch(e => {
        fail(e.message);
      });
  });
  it("should throw 'Skill already exists' error", async () => {
    await createSkillUseCase
      .execute(skill)
      .then(skill => fail("Normal Skill Returned"))
      .catch(e => {
        expect(e.message).toEqual("Skill already exists");
      });
  });
  it("shoul be a invalid form skill", async () => {
    const skill: ICreateSkillDTO = {
      id: undefined,
      name: "",
      description: "Kills the enemy",
      createdAt: null,
      updatedAt: null,
    };
    await createSkillUseCase
      .execute(skill)
      .then(skill => fail("Normal skill returned"))
      .catch(e => {
        expect(e.message).toEqual("Invalid Skill");
      });
  });
  it("shoul destroy a skill normally", async () => {
    await destroySkillUseCase.execute(skill);
  });
});

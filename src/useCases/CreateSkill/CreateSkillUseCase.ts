import { Skill } from "@entities/Skill";
import { ISkillRepository } from "~repositories/ISkillRepository";
import ICreateSkillDTO from "./ICreateSkillDTO";
import { v4 as uuidv4 } from "uuid";
import { ValidateSkillUseCase } from "@useCases/ValidateSkill/ValidateSkillUseCase";

export class CreateSkillUseCase {
  // Construtor Respositórios e Providers
  constructor(
    private skillRepository: ISkillRepository,
    private validateSkillUseCase: ValidateSkillUseCase
  ) {}
  async execute(data: ICreateSkillDTO): Promise<Skill> {
    // VALIDATE A SPELL
    const errors = await this.validateSkillUseCase.execute(data);
    if (errors) {
      throw new Error("Invalid Skill");
    }
    // search for repeated skills
    const exist_skill = await this.skillRepository.findByName(data.name);
    if (exist_skill) {
      throw new Error("Skill already exists");
    }
    // Define a id
    data.id = uuidv4();
    data.createdAt = Date.now();
    data.updatedAt = Date.now();
    // Criar Skill
    return await this.skillRepository.create(data);
  }
}

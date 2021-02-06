import { Skill } from "@entities/Skill";
import { ISkillRepository } from "~repositories/ISkillRepository";
import IFindSkillDTO from "./IFindSkillDTO";

export class FindSkillUseCase {
  constructor(private skillRepository: ISkillRepository) {}
  async execute(data: IFindSkillDTO): Promise<Skill> {
    return await this.skillRepository.findById(data.id);
  }
}

import { Skill } from "@entities/Skill";
import ICreateSkillDTO from "@useCases/CreateSkill/ICreateSkillDTO";
import IDestroySkillDTO from "@useCases/DestroySkill/IDestroySkillDTO";

export interface ISkillRepository {
  create(data: ICreateSkillDTO): Promise<Skill>;
  findById(id: string): Promise<Skill>;
  findByName(name: string): Promise<Skill>;
  destroy(data: IDestroySkillDTO): Promise<Skill>;
}

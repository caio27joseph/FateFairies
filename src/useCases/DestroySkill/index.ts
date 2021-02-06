import PrismaSkillRepository from "@repositories/PrismaRepository/PrismaSkillRepository";
import { DestroySkillUseCase } from "./DestroySkillUseCase";

const skillRepository = new PrismaSkillRepository();

const destroySkillUseCase = new DestroySkillUseCase(skillRepository);

export { destroySkillUseCase };

import PrismaSkillRepository from "@repositories/PrismaRepository/PrismaSkillRepository";
import { validateSkillUseCase } from "@useCases/ValidateSkill";
import { CreateSkillController } from "./CreateSkillController";
import { CreateSkillUseCase } from "./CreateSkillUseCase";

const skillRepository = new PrismaSkillRepository();

const createSkillUseCase = new CreateSkillUseCase(
  skillRepository,
  validateSkillUseCase
);
const createSkillController = new CreateSkillController(createSkillUseCase);

export { createSkillUseCase, createSkillController };

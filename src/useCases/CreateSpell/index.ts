import { PrismaRepository } from "@repositories/PrismaRepository";
import { validateSpellUseCase } from "@useCases/ValidateSpell";
import { CreateUserController } from "./CreateSpellController";
import { CreateSpellUseCase } from "./CreateSpellUseCase";

const createSpellRepository = new PrismaRepository();

const createSpellUseCase = new CreateSpellUseCase(
  createSpellRepository,
  validateSpellUseCase
);
const createSpellController = new CreateUserController(createSpellUseCase);

export { createSpellUseCase, createSpellController };

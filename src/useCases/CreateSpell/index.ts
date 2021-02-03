import PrismaSpellRepository from "@repositories/PrismaRepository/PrismaSpellRepository";
import { validateSpellUseCase } from "@useCases/ValidateSpell";
import { CreateUserController } from "./CreateSpellController";
import { CreateSpellUseCase } from "./CreateSpellUseCase";

const spellRepository = new PrismaSpellRepository();

const createSpellUseCase = new CreateSpellUseCase(
  spellRepository,
  validateSpellUseCase
);
const createSpellController = new CreateUserController(createSpellUseCase);

export { createSpellUseCase, createSpellController };

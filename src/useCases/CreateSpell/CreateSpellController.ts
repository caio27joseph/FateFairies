import { NextApiRequest, NextApiResponse } from "next";
import { CreateSpellUseCase } from "./CreateSpellUseCase";

export class CreateUserController {
  constructor(private useCaseNameUseCase: CreateSpellUseCase) {}

  async handle(
    request: NextApiRequest,
    response: NextApiResponse
  ): Promise<void> {}
}

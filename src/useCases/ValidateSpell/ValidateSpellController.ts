import { NextApiRequest, NextApiResponse } from "next";
import { ValidateSpellUseCase } from "./ValidateSpellUseCase";

export class ValidateSpellController {
  constructor(private validateSpellUseCase: ValidateSpellUseCase) {}

  async handle(
    request: NextApiRequest,
    response: NextApiResponse
  ): Promise<void> {}
}

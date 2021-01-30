import { NextApiRequest, NextApiResponse } from "next";
import api from "../src/pages/api";

export default describe("Status Testing", () => {
  let req: any, res: any;
  beforeEach(() => {
    (req = {}),
      (res = {
        json: jest.fn(),
        status: jest.fn(() => res),
        end: jest.fn(),
      });
  });
  it("should return welcome message from a API index", async () => {
    const CorrectJsonResponse = { message: expect.any(String) };

    req.method = "GET";
    const response = await api(req, res);
    expect(res.json).toBeCalledWith(CorrectJsonResponse);
  });
  it("should send a 200 Status from Api index", async () => {
    req.method = "GET";
    const response = await api(req, res);
    expect(res.status).toBeCalledWith(200);
  });
});

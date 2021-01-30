import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == "GET") {
    res.json({ message: "Welcome to Fate Fairies API" });
    res.status(200).end();
  }
};

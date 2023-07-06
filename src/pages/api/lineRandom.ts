import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = [];

  for (let i = 1; i <= 4; i++) {
    const weekData = {
      name: `Week ${i}`,
      Guest: getRandomNumber(100, 500),
      User: getRandomNumber(100, 500),
      amt: getRandomNumber(100, 500),
    };

    data.push(weekData);
  }

  res.status(200).json(data);
}

function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

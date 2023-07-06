import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Piechart = () => {
  function generateRandomNumbers() {
    const numbers: any = [];

    while (numbers.length < 3) {
      const randomNumber = getRandomNumber(1, 100);

      if (numbers.length === 2) {
        numbers.push(100 - (numbers[0] + numbers[1]));
      } else if (numbers.length === 1) {
        const remainingSum = 100 - randomNumber;
        numbers.push(randomNumber, getRandomNumber(1, remainingSum));
      } else {
        numbers.push(randomNumber);
      }
    }

    return numbers;
  }

  const [numbers, setNumbers] = useState<any>();
  useEffect(() => {
    setNumbers(generateRandomNumbers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  if (numbers) {
    const piedata = {
      datasets: [
        {
          label: "# of Votes",
          data: [numbers[0], numbers[1], numbers[2]],
          backgroundColor: [
            "rgb(152, 216, 158)",
            "rgb(238, 132, 132)",
            "rgb(246, 220, 125)",
          ],
          borderWidth: 1,
        },
      ],
    };
    return (
      <>
        <div className="w-44">
          <Pie data={piedata} />
        </div>
        <div className="flex flex-col justify-between">
          <div className="">
            <div className="flex gap-2 items-center">
              <div className="w-3 h-3 bg-[#98D89E] rounded-full"></div>
              <div className="font-semibold">Basic Tees</div>
            </div>
            <div className="text-[#858585]">{numbers[0]}%</div>
          </div>
          <div className="">
            <div className="flex gap-2 items-center">
              <div className="w-3 h-3 bg-[#E9A0A0] rounded-full"></div>
              <div className="font-semibold">Custom Short Pants</div>
            </div>
            <div className="text-[#858585]">{numbers[1]}%</div>
          </div>
          <div className="">
            <div className="flex gap-2 items-center">
              <div className="w-3 h-3 bg-[#F6DC7D] rounded-full"></div>
              <div className="font-semibold">Super Hoodies</div>
            </div>
            <div className="text-[#858585]">{numbers[2]}%</div>
          </div>
        </div>
      </>
    );
  }
};

export default Piechart;

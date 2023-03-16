import { useState } from "react";

const Switch = () => {
  // const data = [
  //   { id: "989", visible: true },

  //   { id: "578", visible: false },

  //   { id: "999", visible: true },

  //   { id: "365", visible: false },
  // ];

  // const data2 = [
  //   { id: "887", visible: true },

  //   { id: "628", visible: true },

  //   { id: "999", visible: true },

  //   { id: "365", visible: false },
  // ];

  // const trueData = data
  //   .filter((item) => item.visible === true)
  //   .map((item) => item.id);

  // const trueData1 = data2
  //   .filter((item) => item.visible === true)
  //   .map((item) => item.id);

  // const totalData = trueData.concat(trueData1);

  // console.log(totalData);
  const [cnt, setCnt] = useState(0);

  const Plus = () => {
    setCnt((prev) => prev + 1);
  };

  const Minus = () => {
    setCnt((prev) => prev - 1);
  };

  if (cnt < 0) {
    cnt = 0;
  } else if (cnt > 10) {
    cnt = 10;
  }

  const num1 = 46.2525;
  const result1 = num1.toFixed(cnt);

  return (
    <div>
      <button onClick={Plus}>+</button>
      <button onClick={Minus}>-</button>
      <div>{cnt}</div>
      <div>{result1}</div>
    </div>
  );
};

export default Switch;

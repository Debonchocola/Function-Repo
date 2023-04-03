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
    if (cnt < 10) {
      setCnt((prev) => prev + 1);
    } else {
      setCnt((prev) => prev);
    }
  };

  const Minus = () => {
    if (cnt > 0) {
      setCnt((prev) => prev - 1);
    } else {
      setCnt((prev) => prev);
    }
  };

  const num1 = 46.252514242;
  const result1 = num1.toFixed(cnt);

  return (
    <div>
      <button onClick={Plus}>+</button>
      <button onClick={Minus}>-</button>
      <div>{cnt}</div>
      <div>{result1}</div>
      <select>1</select>
    </div>
  );
};

export default Switch;

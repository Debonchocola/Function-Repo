const Filter = () => {
  const data = ["1324", "aaa", 12, 15, 10, 11];
  const numData = [];
  const strData = [];

  let avg = 0;
  for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === "number") {
      numData.push(data[i]);
      avg += data[i];

      console.log("11111");
    } else if (typeof data[i] === "string") {
      strData.push(data[i]);
    } else return;
  }
  const max = Math.max(numData);
  const min = Math.min(numData);
  console.log(numData, strData, data);
  return (
    <div>
      {/* {numData.map((a) => (
        <div key={a}>{a}</div>
      ))}
      {avg / numData.length}/{avg}/{max}/{min} */}
      {numData.map((a, i) => (
        <div>
          {a}
          {a[i]}
        </div>
      ))}
    </div>
  );
};

export default Filter;

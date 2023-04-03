const TestArray = () => {
  const data = [
    [1, 1],
    [1, 2],
    [1, 3],
    [1, 4],
  ];
  const data1 = [
    [1, 1],
    [2, 1],
  ];

  const set = new Set([...data, ...data1].map((item) => JSON.stringify(item)));
  const result = Array.from(set).map((item) => JSON.parse(item));

  console.log(result);
};

export default TestArray;

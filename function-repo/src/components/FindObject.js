const FindObject = () => {
  const data = [
    { type: 1, text: "안녕" },
    { type: 1, text: "안녕안녕" },
    { type: 1, text: "반갑" },
    { type: 0, text: "뵙습" },
    { type: 1, text: "습니다" },
    { type: 0, text: "이따" },
    { type: 1, text: "만나" },
  ];
  const filteredData = data.filter((a) => a.type === 1).length;
  const lastData = data.lastIndexOf(data.type === 0);
  return (
    <div>
      {console.log(filteredData)}
      <div>{lastData}</div>
    </div>
  );
};

export default FindObject;

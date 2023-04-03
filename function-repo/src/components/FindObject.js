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
  const lastData = data.filter((a) => a.type === 0);
  const lastIndex = data.filter(
    (a) => a.text === lastData[lastData.length - 1].text
  );
  for (let i = 0; i < data.length; i++) {
    if (data[i].type === 0) {
    }
  }

  return (
    <div>
      {/* {console.log(lastData[lastData.length - 1].text)} */}
      {console.log(lastIndex.text)}
      {console.log(data.findIndex((a) => a.text === "이따"))}
      <div>
        {data.length -
          data.findIndex((a) => a.text === lastData[lastData.length - 1].text)}
      </div>
    </div>
  );
};

export default FindObject;

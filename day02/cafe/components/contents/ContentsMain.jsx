import Card from "./Card";

const ContentsMain = () => {
  return (
    <div className="grid grid-cols-3 gap-10 w-full h-full border border-slate-200 flex-3/4">
      {Array(6)
        .fill(0)
        .map((v, i) => (
          <Card
            key={i}
            isHigh={![0, 3, 5].some((v) => v == i)}
            imageUrl={"/1.jpg"}
            title={"이벤트"}
            subTitle={"SWEET DAY 이벤트"}
            alt={"SWEET DAY 이벤트"}
          />
        ))}
    </div>
  );
};

export default ContentsMain;

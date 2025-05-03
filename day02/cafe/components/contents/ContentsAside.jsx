import { colors } from "@/styles/color";
import CardSide from "./CardSide";


const ContentsAside = () => {
  return (
    <div className={`p-5 w-full h-full border border-slate-200 flex-1/4 bg-[${colors.green.secondary}] flex flex-col gap-10`}>
      <h4 className={`text-[${colors.green.primary}] font-bold text-lg mb-15`}>
        조금 더 특별하고 따뜻한,
        <br /> 그런 카페베네
      </h4>
      <CardSide
        buttonTitle={"인테리어보기"}
        imageUrl={"/7.jpg"}
        title={"내가 오픈하고 싶은 카페"}
        subTitle={"동네와 공간, 저마다의 특별함과 다양함은 다르니까요."}
        alt={"동네와 공간, 저마다의 특별함과 다양함은 다르니까요."}
      />
      <CardSide
        buttonTitle={"인테리어보기"}
        imageUrl={"/8.jpg"}
        title={"내가 오픈하고 싶은 카페"}
        subTitle={"동네와 공간, 저마다의 특별함과 다양함은 다르니까요."}
        alt={"동네와 공간, 저마다의 특별함과 다양함은 다르니까요."}
      />
    </div>
  );
};

export default ContentsAside;

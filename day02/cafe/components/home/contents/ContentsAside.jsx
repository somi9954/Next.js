import { AD_CARD_DATA } from "@/constants/AdCard";
import Image from "next/image";
import Heading from "../../common/typography/Heading";
import AdCard from "./subcomponents/AdCard";

const ContentsAside = () => {
  return (
    <div className="p-5 w-full h-full border border-slate-200 flex-1/4 bg-[#C8E2E0] flex flex-col gap-10">
      <div className="relative w-full h-[100px] overflow-hidden rounded-lg">
        <div className="absolute top-5 z-10">
          <Heading level={4} className="text-[#00a5b1]">
            조금 더 특별하고
            <br />
            따뜻한, 그런 카페베네
          </Heading>
        </div>
        <Image
          src={"/m-cafe-bg.jpg"}
          alt={""}
          width={400}
          height={400}
          className="object-cover"
          priority
        />
      </div>
      <div className="flex flex-col gap-4">
        {AD_CARD_DATA.map((v, i) => <AdCard key={i} {...v} />)}
      </div>
    </div>
  );
};

export default ContentsAside;

  // 리펙토링 ContentCard.jsx

/* import Image from "next/image";

const Card = (props) => {

  return (
    <div className="flex flex-col gap-2 w-full">
      <div
        className={`${props.isHigh ? "h-[500px]" : "h-[300px]"} w-full  relative`}
      >
        <Image
          className="object-cover"
          fill
          priority
          alt=""
          src={props.imageUrl}
        />
      </div>
      <h5 className="text-xs text-slate-500 font-medium">{props.title}</h5>
      <p className="text-md text-gray-700">{props.subTitle}</p>
    </div>
  );
};

export default Card;
 */


//리펙토링 Heading.jsx

/* const Title = (props) => {
  return <h3 className="text-[#3a466a] font-medium text-x1">{props.title}</h3>;
};

export default Title; */


//ContentGrid.jsx 리펙토링
/* 
import {CONTENT_CARD_DATA} from "@/constants/ContentCard"
import ContentCard from "./ContentCard"

const ContentsMain = () => {
  return (
    <div className="grid grid-cols-3 gap-10 w-full h-full border border-slate-200 flex-3/4">
      {CONTENT_CARD_DATA.map((v, i)=> <ContentCard key={i} {...v} isHigh={i % 2 } />)}
    </div>
  );
};

export default ContentsMain; */


// AdCard.jsx 리펙토링
/* import Image from "next/image";

const CardSide = (props) => {
  return (
    <div className="flex flex-col justify-center items-center text-center gap-5 w-full">
      <div className={`h-[150px] w-full  relative`}>
        <Image
          className="object-cover"
          fill
          priority
          src={props.imageUrl}
        />
      </div>
      <h5 className="text-lg text-gray-800 font-medium">{props.title}</h5>
      <p className="text-md text-gray-700">{props.subTitle}</p>
      <button className={`bg-[#00a5b1] rounded-3xl text-white py-2 px-5 w-fit`}>
        {props.buttonTitle}
      </button>
    </div>
  );
};

export default CardSide;
 */
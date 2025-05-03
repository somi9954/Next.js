import Image from "next/image";

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
          alt={props.alt}
          src={props.imageUrl}
        />
      </div>
      <h5 className="text-xs text-slate-500 font-medium">{props.title}</h5>
      <p className="text-md text-gray-700">{props.subTitle}</p>
    </div>
  );
};

export default Card;

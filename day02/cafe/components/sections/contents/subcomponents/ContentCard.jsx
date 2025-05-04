"use client";

import Heading from "@/components/common/typography/Heading";
import Paragraph from "@/components/common/typography/Paragraph";
import Image from "next/image";
import { useState } from "react";

const ContentCard = ({ isHigh, imageUrl, title, subTitle }) => {
  const [onMouse, setOnMouse] = useState(false);
  const [index, setIndex] = useState(1);

  return (
    <div
      onMouseEnter={() => {
        setOnMouse(true);
        setIndex(Math.floor(Math.random() * 5) + 1);
      }}
      onMouseLeave={() => setOnMouse(false)}
      className="flex flex-col gap-2 w-full"
    >
      <div className={`${isHigh ? "h-[400px]" : "h-[200px]"} w-full relative`}>
        <Image
          src={imageUrl}
          alt={title}
          fill
          priority
          className="object-cover"
        />
        <div
          className={`
            ${onMouse ? "opacity-100" : "opacity-0"}
            transition-opacity duration-150
            absolute -top-9 -right-1
            w-17 h-17
            z-10
          `}
        >
          <Image src={`/cat${index}.png`} alt="고양이" width={70} height={70} />
        </div>
      </div>

      <Heading level={5}>
        {title}
      </Heading>
      <Paragraph>
        {subTitle}
      </Paragraph>
    </div>
  );
};

export default ContentCard;

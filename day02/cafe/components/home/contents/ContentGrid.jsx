import { CONTENT_CARD_DATA } from "@/constants/ContentCard";
import ContentCard from "./subcomponents/ContentCard";

const ContentGrid = () => {
  const highIndices = [1,2,4];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full h-full flex-3/4">
      {CONTENT_CARD_DATA.map((v, i) =>
        <ContentCard key={i} {...v} isHigh={highIndices.includes(i)} />
      )}
    </div>
  );
};

export default ContentGrid;

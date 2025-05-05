import Container from "@/components/common/layout/Container";
import Heading from "../../common/typography/Heading";
import ContentsAside from "./ContentsAside";
import ContentGrid from "./ContentGrid";

const Contents = () => {
  return (
<Container className="py-10 px-8 md:px-0">
      <Heading level={3}>Contents</Heading>
      <div className="flex flex-col md:flex-row w-full gap-10">
        <ContentGrid />
        <ContentsAside />
      </div>
    </Container>
  );
};

export default Contents;

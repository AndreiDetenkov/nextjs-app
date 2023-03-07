import {useState} from "react";
import {AppearanceType, ArrowType, Button, Htag, Paragraph, Rating, Tag, TagColor, TagSize} from '../components';
import {withLayout} from "../layout/Layout";

function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(3);

  return (
    <>
      <Htag tag='h1'>Text</Htag>
      <Button appearance={AppearanceType.primary}>
        Button1
      </Button>
      <Button appearance={AppearanceType.outline} arrow={ArrowType.right}>Button2</Button>

      <Paragraph>qwqwqw</Paragraph>

      <Tag size={TagSize.small}>Ghost</Tag>
      <Tag size={TagSize.medium} color={TagColor.red}>Red</Tag>
      <Tag size={TagSize.medium} color={TagColor.green}>Green</Tag>
      <Tag color={TagColor.primary}>Primary</Tag>

      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}

export default withLayout(Home);

import {AppearanceType, ArrowType, Button, Htag, Paragraph, Tag, TagColor, TagSize} from '../components';

export default function Home(): JSX.Element {
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
    </>
  );
}

import {AppearanceType, ArrowType, Button, Htag, Paragraph} from '../components';

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>Text</Htag>
      <Button appearance={AppearanceType.primary}>
        Button1
      </Button>
      <Button appearance={AppearanceType.outline} arrow={ArrowType.right}>Button2</Button>

      <Paragraph>qwqwqw</Paragraph>
    </>
  );
}

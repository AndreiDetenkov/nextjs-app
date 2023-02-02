import { AppearanceType, Button, Htag } from '../components';

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>Text</Htag>
      <Button className='button1212' appearance={AppearanceType.primary}>
        Button
      </Button>
      <Button appearance={AppearanceType.outline}>Button</Button>
    </>
  );
}

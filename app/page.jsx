import HomeProperties from '@/components/HomeProperties';
import Hero from '../components/Hero';
import InfoBoxes from '../components/InfoBoxes';

const HomePage = async () => {
  return (
    <>
      <Hero />
      <InfoBoxes />
      <HomeProperties />
    </>
  );
};

export default HomePage;

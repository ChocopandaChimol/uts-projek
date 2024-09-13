'use client';

import Header from '@/components/Header'
import Hero from '@/components/Hero';
import Background1 from '@/components/background1';
import Background2 from '@/components/background2';
import Background3 from '@/components/background3';
import MockupSection from '@/components/mockupSection';
import InfoSection from '@/components/infoSection';
import InfoSection2 from '@/components/infoSection2';
import InfoSection3 from '@/components/infoSection3';
import ReviewCarousel from '@/components/ReviewCarousel';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <>
      <Background1>
        <Header />
        <Hero />
      </Background1>


      <Background2>
        <MockupSection backgroundMode="light" />
        <InfoSection backgroundMode="light" />
        <InfoSection2 backgroundMode="light" />
        <InfoSection3 backgroundMode="light" />
        <ReviewCarousel backgroundMode="light" />
      </Background2>

      <Background3>
        <Footer />
      </Background3>
    </>
  );
};

export default Home;

import HeroSection from '@/components/HeroSection';

const Home = () => {
  return (
    <main className="flex text-colorBodyWhite dark:text-colorGray min-h-screen flex-col items-center justify-between mt-10">
      <HeroSection />
      <HeroSection />
      <HeroSection />
    </main>
  );
};

export default Home;

import HeroSection from '@/components/HeroSection';

const Home = () => {
  return (
    <main className="flex text-colorBodyWhite dark:text-colorGray min-h-screen flex-col items-center justify-between mt-6 md:mt-10 lg:w-[90%] xl:w-[93%] 2xl:w-[90%] lg:mx-auto lg:mt-4">
      <HeroSection />
    </main>
  );
};

export default Home;

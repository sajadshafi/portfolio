// import Image from 'next/image';
import About from '@/components/pages/home/About';
import HeroSection from '@/components/pages/home/HeroSection';

const Home = () => {
  return (
    <main className="flex text-colorBodyWhite dark:text-colorGray min-h-screen flex-col items-center justify-between mt-6 md:mt-10 lg:w-[90%] xl:w-[93%] 2xl:w-[90%] lg:mx-auto lg:mt-4">
      <div className="mb-20">
        <HeroSection />
      </div>
      <div className="px-6 sm:px-10 w-full">
        <div
          id="about"
          className="pt-20 border-t border-t-colorSubtitle w-full">
          <About />
        </div>
      </div>
    </main>
  );
};

export default Home;

import React from 'react';
import { RiContactsFill } from 'react-icons/ri';
import Header from '@/components/pages/resume/Header';
import Heading from '@/components/headings/Heading';
import ResumeCard from '@/components/pages/resume/ResumeCard';
import { contactDetails } from '@/utils/data';

const Resume = () => {
  return (
    <main className="flex text-colorBodyWhite dark:text-colorGray min-h-screen flex-col items-center justify-between mt-6 md:mt-10 lg:w-[90%] xl:w-[93%] 2xl:w-[90%] lg:mx-auto lg:mt-4">
      <div className="px-6 sm:px-10 w-full">
        <div className="my-8 flex justify-center">
          <Heading
            title="Resume"
            className="items-center"
            subTitle="Professional Profile"
          />
        </div>
        <Header />
        <div className="grid">
          <ResumeCard
            heading="Contact ME"
            icon={<RiContactsFill />}>
            {contactDetails.content}
          </ResumeCard>
        </div>
      </div>
    </main>
  );
};

export default Resume;

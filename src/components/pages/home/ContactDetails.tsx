import { HiDocumentArrowDown } from 'react-icons/hi2';
import { RiContactsLine } from 'react-icons/ri';
import SlideSection from '@/components/animations/SlideSection';
import { aboutDetails } from '@/utils/data';
import User from '@/components/icons/User';
import { IconLink } from '@/components/common/Button';

const ContactDetails = () => {
  return (
    <SlideSection className="mt-6 shadow-shadowWhite3 dark:shadow-shadow1 w-full p-8 flex flex-col gap-2 bg-backgroundColor1 dark:bg-backgroundColor2 rounded-[10px] lg:justify-center xl:col-span-2">
      <div className="p-[10px] mr-auto rounded-full inline-block bg-colorPrimary bg-opacity-20">
        <span className="w-[40px] h-[40px] flex items-center justify-center bg-colorPrimary rounded-full text-colorWhite">
          <User />
        </span>
      </div>
      <div className="grid pl-1 mt-5 grid-cols-1 gap-3">
        {aboutDetails.map(ad => (
          <p
            key={ad.text}
            className="flex items-center font-secondary">
            <span className="text-colorPrimary text-2xl mr-4 w-auto">
              {ad.icon}
            </span>
            {ad.text}
          </p>
        ))}
      </div>
      <div className="max-[455px]:inline-block max-[455px]:w-fit flex gap-5 lg:gap-3 sm:gap-10 mx-2 justify-start mt-6">
        <IconLink
          to="/"
          icon={<HiDocumentArrowDown className="mr-2" />}
          classes="font-semibold hover:-translate-y-1 lg:w-fit rounded-primary font-primary  bg-backgroundColor1 dark:bg-backgroundColor2"
          text="Download CV"
        />
        <IconLink
          to="/contact"
          icon={<RiContactsLine className="mr-2" />}
          classes="font-semibold max-[455px]:mt-4 hover:-translate-y-1 lg:w-fit rounded-primary font-primary  bg-backgroundColor1 dark:bg-backgroundColor2"
          text="Contact Me"
        />
      </div>
    </SlideSection>
  );
};

export default ContactDetails;

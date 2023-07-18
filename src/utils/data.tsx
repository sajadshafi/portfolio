import Link from 'next/link';
import { ImGithub, ImLinkedin, ImTwitter } from 'react-icons/im';
import { RiSuitcase2Line } from 'react-icons/ri';
import { AiFillInstagram } from 'react-icons/ai';
import { MdOutlineEmail } from 'react-icons/md';
import { IoLocationOutline } from 'react-icons/io5';
import { BsFileEarmarkCode } from 'react-icons/bs';
import { GrMail, GrSkype, GrLinkedin, GrGithub } from 'react-icons/gr';
import { FaPhoneSquareAlt } from 'react-icons/fa';
import { SocialMediaLinkOptions, AboutDetailOptions } from '@/interfaces/types';

const socialLinks: SocialMediaLinkOptions[] = [
  {
    to: 'https://www.github.com/sajadshafi',
    name: 'Github',
    icon: <ImGithub />,
  },
  {
    to: 'https://www.linkedin.com/in/sajadshafi',
    name: 'Linked In',
    icon: <ImLinkedin />,
  },
  {
    to: 'https://www.twitter.com/sajadshafi_dev',
    name: 'Twitter',
    icon: <ImTwitter />,
  },
];

export default socialLinks;

export const footerLinks: SocialMediaLinkOptions[] = [
  {
    to: 'https://www.instagram.com/sajadshafi',
    name: 'Instagram',
    icon: <AiFillInstagram />,
  },
  {
    to: 'https://www.linkedin.com/in/sajadshafi',
    name: 'Linked In',
    icon: <ImLinkedin />,
  },
  {
    to: 'https://www.twitter.com/sajadshafi_dev',
    name: 'Twitter',
    icon: <ImTwitter />,
  },
];

export const aboutDetails: AboutDetailOptions[] = [
  {
    icon: <BsFileEarmarkCode />,
    text: 'Software Engineer',
  },
  {
    icon: <RiSuitcase2Line />,
    text: '2+ Years Experience',
  },
  {
    icon: <MdOutlineEmail />,
    text: 'maliksajad004@gmail.com',
  },
  {
    icon: <IoLocationOutline />,
    text: 'Jammu & Kashmir, INDIA',
  },
];

export const projects = [
  {
    heading: 'My Personal Portfolio',
    text: 'This portfolio is a collection of my most notable projects and achievements, and is meant to give you a sense of my skills, abilities, and experience as a Software Engineer.',
    tags: ['Next Js', 'Tailwind css', 'Framer motion'],
    linkText: '',
    linkUrl: '',
  },
  {
    heading: 'Birdscode',
    text: 'Birdscode is a blog where you will find a collection of my thoughts, insights, and experiences as a Software Engineer. My goal with this blog is to share my knowledge and expertise with others in the industry, and to provide a platform for discussion and learning. I am always seeking to improve my skills and knowledge as a Software Engineer, and I hope that my blog can serve as a resource for others who are looking to do the same.',
    tags: ['Next Js', 'react-bootstrap', 'C#', '.NET Core'],
    linkText: 'Visit',
    linkUrl: 'https://www.birdscode.com',
  },
];

export const contactDetails = {
  content: (
    <>
      <span className="flex items-center">
        <span className="mr-3">
          <GrMail />
        </span>
        <Link
          className="hover:underline contact-links hover:underline-offset-1"
          href="mailto:maliksajad004@gmail.com">
          maliksajad004@gmail.com
        </Link>
      </span>
      <span className="flex items-center mt-3">
        <span className="mr-3">
          <FaPhoneSquareAlt />
        </span>
        <Link
          className="contact-links"
          href="tel:+917006586736">
          +91-7006586736
        </Link>
      </span>
      <span className="flex items-center mt-3">
        <span className="mr-3">
          <GrSkype />
        </span>
        <span className="">
          <Link
            className="contact-links"
            href="skype:live:.cid.253bd4f1fa21bb39?chat">
            maliksajad004@gmail.com
          </Link>
        </span>
      </span>
      <span className="flex items-center mt-3">
        <span className="mr-3">
          <GrLinkedin />
        </span>
        <span className="flex items-center">
          <Link
            className="contact-links"
            target="_blank"
            href="https://www.linkedin.com/in/sajadshafi/">
            @sajadshafi
          </Link>
        </span>
      </span>
      <span className="flex items-center mt-3">
        <span className="mr-3">
          <GrGithub />
        </span>
        <span className="flex items-center">
          <Link
            className="ho"
            target="_blank"
            href="https://github.com/sajadshafi">
            @sajadshafi
          </Link>
        </span>
      </span>
    </>
  ),
};

// techSkills: {
//   heading: 'Technicals Skills',
//   skills: [
//     'Experienced in C# and ASP NET / .Net Core',
//     'Proficient in HTML, CSS, JavaScript, ReactJS, and NextJS',
//     'Strong understanding of software development life cycle and agile methodologies',
//     'Proficient in debugging',
//     'Experience with version control systems such as Git',
//   ],
// },
// generalSkills: {
//   heading: 'General Skills',
//   skills: [
//     'Strong problem-solving skills',
//     'Ability to work independently and in a team',
//     'Strong communication skills',
//     'Adaptability and flexibility',
//     'Public Speaking',
//   ],
// },

export const experiences = {
  heading: 'Work Experience',
  list: [
    {
      companyName: 'QSS Technosoft Pvt. Ltd.',
      role: 'Software Engineer',
      dateFrom: 'September - 2021',
      dateTo: 'Present',
    },
  ],
};

export const internships = {
  heading: 'Internships',
  list: [
    {
      companyName: 'Innodatatics Bangalore',
      role: 'Data analyst intern',
      dateFrom: 'March - 2021',
      dateTo: 'June - 2021',
      certificateLink: '/documents/DS_Intern-Sajad-Shafi.pdf',
    },
    {
      companyName: 'Codemites Srinagar',
      role: 'Software Engineer Intern',
      dateFrom: 'February - 2021',
      dateTo: 'July - 2019',
      certificateLink: '',
    },
  ],
};

export const educations = {
  heading: 'Education',
  list: [
    {
      collegeName: 'University of Kashmir',
      degreeName: 'Bachelors of Computer Applications (BCA)',
      cgpa: '7.62',
      passedOut: '2020',
    },
  ],
};

export const certifications = {
  heading: 'Certification',
  list: [
    {
      institute: 'ExcelR Bangalore',
      certificationName: '3 Months certification in Data Science',
      dateFrom: 'December - 2020',
      dateTo: 'March - 2021',
      certificateLink: '/documents/DS_cert-Sajad-Shafi.pdf',
    },
  ],
};

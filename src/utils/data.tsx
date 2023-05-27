import { ImGithub, ImLinkedin, ImTwitter } from 'react-icons/im';
import { RiSuitcase2Line } from 'react-icons/ri';
import { AiFillInstagram } from 'react-icons/ai';
import { MdOutlineEmail } from 'react-icons/md';
import { IoLocationOutline } from 'react-icons/io5';
import { BsFileEarmarkCode } from 'react-icons/bs';
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

export default socialLinks;

import { ImGithub, ImLinkedin, ImTwitter } from 'react-icons/im';
import { SocialMediaLinkOptions } from '@/interfaces/types';

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

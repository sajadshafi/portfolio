import React from 'react';
import { IconLink } from './common/Button';
import Tooltip from './common/Tooltips';
import socialLinks, { footerLinks } from '@/utils/data';

const SocialSection = ({ className }: { className: string }) => {
  return (
    <div className={`flex gap-7 ${className}`}>
      {socialLinks.map(sm => (
        <Tooltip.Top
          text={sm.name}
          key={sm.name}
          position="top">
          <IconLink
            classes="rounded-md text-2xl"
            icon={sm.icon}
            to={sm.to}
          />
        </Tooltip.Top>
      ))}
    </div>
  );
};

export const FooterSocialSection = ({ className }: { className: string }) => {
  return (
    <div className={`flex gap-7 ${className}`}>
      {footerLinks.map(sm => (
        <Tooltip.Top
          text={sm.name}
          key={sm.name}
          position="top">
          <IconLink
            classes="rounded-md text-2xl"
            icon={sm.icon}
            to={sm.to}
          />
        </Tooltip.Top>
      ))}
    </div>
  );
};

export default SocialSection;

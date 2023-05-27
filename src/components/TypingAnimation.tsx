'use client';

import React from 'react';
import Typed from 'typed.js';

const TypingAnimation = ({ textlist }: { textlist: string[] }) => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: textlist,
      typeSpeed: 50,
      smartBackspace: true,
      loop: true,
      showCursor: true,
    });

    return () => {
      typed.destroy();
    };
  }, [textlist]);

  return <span ref={el} />;
};

export default TypingAnimation;

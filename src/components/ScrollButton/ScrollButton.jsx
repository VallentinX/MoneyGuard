import React, { useState } from 'react';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { Button } from './ScrollButton.styled';

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);
  const [opacity, setOpacity] = useState(0);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisible(true);
      setOpacity(1);
    } else {
      setVisible(false);
      setOpacity(0);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <Button $opacity={opacity}>
      <BsFillArrowUpCircleFill
        onClick={scrollToTop}
        style={{ display: visible ? 'inline-block' : 'none' }}
      />
    </Button>
  );
};

export default ScrollButton;

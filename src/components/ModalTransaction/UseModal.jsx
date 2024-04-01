import { useEffect, useState } from 'react';

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, SetData] = useState(null);

  const toggle = () => setIsOpen(prev => !prev);

  const close = () => {
    setIsOpen(false);
  };

  const open = content => {
    setIsOpen(true);

    if (content !== null) {
      SetData(content);
    }
  };

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }, [isOpen]);

  return { isOpen, close, open, toggle, data };
};

export default useModal;

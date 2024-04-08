import { useEffect, useState } from "react";

// const UseModal = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [data, SetData] = useState(null);
//   const close = () => {
//     setIsOpen(false);
//   };

//   const toggle = () => setIsOpen(prev => !prev);
//   const open = content => {
//     setIsOpen(true);
//     if (content !== null) {
//       SetData(content);
//     }
//   };

//   useEffect(() => {
//     isOpen
//       ? (document.body.style.overflow = 'hidden')
//       : (document.body.style.overflow = 'auto');
//   }, [isOpen]);

//   return { isOpen, close, open, toggle, data };
// };

// export default UseModal;

const UseModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(null);

  const close = () => {
    setIsOpen(false);
  };

  const toggle = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  const open = (content) => {
    setIsOpen(true);
    if (content !== null) {
      setData(content);
    }
  };

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [isOpen]);

  return { isOpen, close, open, toggle, data };
};

export default UseModal;

import { useEffect } from "react";

import {
  ButtonCloseStyle,
  CancelBtnStyle,
  ModalWindowStyle,
  OverlayStyle,
} from "./ModalTransaction.style";

import PropTypes from "prop-types";

const ModalTransaction = function ({ children, showCloseIcon = true, close }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        close();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [close]);

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      close();
    }
  };

  const closeClick = (e) => {
    if (e.target.name === "cancel" || e.currentTarget.name === "closeSvg") {
      close();
    }
  };

  return (
    <OverlayStyle onClick={(e) => handleBackdropClick(e)}>
      <ModalWindowStyle>
        {showCloseIcon && (
          <ButtonCloseStyle type="button" name="closeSvg" onClick={closeClick}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L17 17" stroke="#fbfbfb" />
              <path d="M1 17L17 0.999999" stroke="#fbfbfb" />
            </svg>
          </ButtonCloseStyle>
        )}
        {children}
        <CancelBtnStyle type="button" name="cancel" onClick={closeClick}>
          Cancel
        </CancelBtnStyle>
      </ModalWindowStyle>
    </OverlayStyle>
  );
};

ModalTransaction.propTypes = {
  children: PropTypes.node,
  showCloseIcon: PropTypes.bool,
  close: PropTypes.func,
};

export default ModalTransaction;

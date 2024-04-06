import styled from 'styled-components';

export const OverlayStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  background: #220d5b3b;
  backdrop-filter: blur(3.5px);
  transition: opacity 500ms ease-in-out, visibility 500ms ease-in-out;
  opacity: 1;
  visibility: visible;

  @media screen and (min-width: 768px) {
    box-shadow: 0px 4px 60px 0px #00000040;
  }
`;
export const ModalWindowStyle = styled.div`
  width: 320px;
  min-height: 600px;

  @media only screen and (max-width: 767px) {
    min-height: 700px;
  }

  padding: 41px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: radial-gradient(#3f2e96, #5f478c);
  border-radius: 8px;
  position: relative;
  box-shadow: 0px 4px 60px 0px #00000040;

  @media screen and (min-width: 768px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
    padding: calc(20 * (100vw / 480));
    min-width: 300px;
  }

  @media screen and (min-width: 768px) {
    max-width: 540px;
    max-height: 511px;
    border-radius: 8px;
  }

  @media screen and (min-width: 1280px) {
    border-radius: 8px;
    padding: calc(20 * (100vw / 480));
    min-width: 300px;
  }
`;
export const ButtonCloseStyle = styled.button`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  padding: 0;
  line-height: 0;
  border: none;
  cursor: pointer;
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }

  &:hover {
    transform: scale(1.4);
    transition: transform 0.3s ease-in-out;
  }

  &:not(:hover) {
    transform: scale(1);
    transition: transform 0.3s ease-in-out;
  }
`;
export const CancelBtnStyle = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 280px;
  height: 50px;
  padding: 13px 68px;
  background-color: #fbfbfb;
  border-radius: 20px;
  border: none;
  line-height: 1.5;
  font-size: 18px;
  letter-spacing: 1.8px;
  color: #623f8b;
  font-weight: 400;
  text-transform: uppercase;
  cursor: pointer;
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.3s ease, transform 0.3s ease;

  &:hover {
    opacity: 0.8;
    transform: translateY(-1px);
  }
`;

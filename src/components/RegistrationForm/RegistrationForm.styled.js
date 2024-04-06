import styled from "styled-components";
import PasswordStrengthBar from "react-password-strength-bar-with-style-item";

import registrationMobile from "../../images/register-bkg/mobile-regiter-bkg.webp";
import registrationTablet from "../../images/register-bkg/tablet-regiter-bkg.webp";
import registrationDesktop from "../../images/register-bkg/desktop-regiter-bkg.webp";

export const StyledSection = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #1e0646;
  background-image: url(${registrationMobile});
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 768px) {
    background-image: url(${registrationTablet});
  }

  @media screen and (min-width: 1280px) {
    background-image: url(${registrationDesktop});
  }
`;

export const StyledForm = styled.form`
  display: block;
  position: relative;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: 533px;
    height: 680px;
    background: radial-gradient(#2f1f81, #ffffff3a);
    backdrop-filter: blur(50px);
    box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.25);
  }
`;

export const StyledPasswordStrengthBar = styled(PasswordStrengthBar)`
  width: 100%;
`;

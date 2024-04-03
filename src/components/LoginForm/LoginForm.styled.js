import styled from "styled-components";
import { NavLink } from "react-router-dom";
import loginMobile from "../../images/login-bkg/mobile-login-bkg.webp";
import loginTablet from "../../images/login-bkg/tablet-login-bkg.webp";
import loginDesktop from "../../images/login-bkg/desktop-login-bkg.webp";
import TextField from "@mui/material/TextField";

export const StyledSection = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #1e0646;
  background-image: url(${loginMobile});
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 768px) {
    background-image: url(${loginTablet});
  }

  @media screen and (min-width: 1280px) {
    background-image: url(${loginDesktop});
  }
`;

export const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LogoImg = styled.img`
  margin-top: 80px;
  width: 25px;
  height: 25px;

  @media screen and (min-width: 768px) {
    width: 36px;
    height: 36px;
  }
`;

export const LogoName = styled.span`
  color: #fbfbfb;
  font-size: 19px;

  @media screen and (min-width: 768px) {
    font-size: 27px;
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
    height: 620px;
    background: radial-gradient(#2f1f81, #ffffff3a);
    backdrop-filter: blur(50px);
    box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.25);
  }
`;

export const StyledLink = styled(NavLink)`
  width: 319px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: 1px solid #4a56e2;
  margin: auto;
  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);

  font-weight: 400;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 1.8;
  word-wrap: break-word;
  text-align: center;
  cursor: pointer;
  background-color: #ffffff;
  color: #623f8b;

  &:hover {
    font-weight: 600;
  }
`;

export const StyledLoginField = styled(TextField)`
  fieldset {
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 0;
    &:hover {
      border-bottom: 1px solid ${({ theme }) => theme.backgrounds.active};
    }
  }
`;
